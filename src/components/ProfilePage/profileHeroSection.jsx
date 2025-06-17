import React, { useEffect, useState } from 'react';
import dp from '/images/profilePicture.jpg';
import { CameraIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAuthToken } from '../../../utils/authToken';

function ProfileHeroSection() {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = getAuthToken();

            try {
                const response = await axios.get('https://familymatch.aakilarose.com/api/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log('API Response:', response.data); // ✅ log directly
                setProfileData(response.data.data); // update state
            } catch (error) {
                console.error('Error fetching profile:', error.response?.data || error.message);
            }
        };

        fetchProfile();
    }, []);

    // Optional: log once the state is updated
    useEffect(() => {
        if (profileData) {
            console.log('Updated profileData:', profileData);
        }
    }, [profileData]);

    return (
        <section className="relative md:mx-16 sm:mx-8 md:my-6 m-2 sm:my-8 bg-white rounded-lg text-gray-700 p-4 sm:p-6 flex flex-col sm:flex-row sm:justify-between">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start">
                {/* Profile Picture */}
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 group">
                    <div className="w-full h-full bg-[#D1D6DC] rounded-full flex items-center justify-center shadow-md overflow-hidden relative">
                        <img
                            src={profileData?.img}
                            alt="photo"
                            className="w-full h-full object-cover rounded-full transition duration-300 group-hover:brightness-75"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-300 rounded-full">
                            <CameraIcon className="h-10 w-10 text-white" />
                        </div>
                    </div>
                </div>

                {/* User Info */}
                <div className="text-center sm:text-left space-y-3">
                    <div>
                        <h1 className="font-bold text-2xl sm:text-3xl">
                            {profileData?.full_name || 'Loading...'}
                        </h1>
                        <p className="text-sm sm:text-[14px]">
                            {profileData?.age || '--'} years old, {profileData?.country || 'Unknown'}
                        </p>
                        <p className="text-green-600 text-sm">Online</p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 sm:gap-8 justify-center sm:justify-start mb-2">
                        <div className="leading-none text-center">
                            <p className="font-bold text-lg">{profileData?.profile_completion || '0'}%</p>
                            <label className="text-sm">Profile Completion</label>
                        </div>
                        <div className="leading-none text-center">
                            <p className="font-bold text-lg">{profileData?.profile_views || '0'}</p>
                            <label className="text-sm">Profile Views</label>
                        </div>
                        <div className="leading-none text-center">
                            <p className="font-bold text-lg">{profileData?.matches || '0'}</p>
                            <label className="text-sm">Matches</label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center sm:mt-0 gap-3">
                <Link to="/publicview">
                    <button className="bg-black text-xs rounded-full text-white px-5 py-2 hover:bg-pink-600">
                        Public view
                    </button>
                </Link>
                <Link to="/publicview">
                    <button className="bg-[#9334EB] text-xs rounded-full text-white px-5 py-2 hover:bg-pink-600">
                        Edit Profile
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default ProfileHeroSection;
