import React from 'react';
import dp from '/images/profilePicture.jpg'; 
import { CameraIcon } from '@heroicons/react/24/solid'; 
import { Link } from 'react-router-dom'; 

function ProfileHeroSection() {
    return (
        <section className="relative overflow-hidden mx-14 my-8 flex justify-between  bg-white rounded-lg text-gray-700">
            <div className="flex  py-4">
                <div className="relative">
                    <div className="absolute left-4 top-4 w-48 h-48 group">
                        <div className="w-full h-full bg-[#D1D6DC] rounded-full flex items-center justify-center shadow-md overflow-hidden relative">
                            <img
                                src={dp}
                                alt="photo"
                                className="w-full h-full object-cover rounded-full transition duration-300 group-hover:brightness-75"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-300 rounded-full">
                                <CameraIcon className="h-10 w-10 text-white" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pl-62 space-y-6">
                    <div className="space-y-1">
                        <h1 className="font-bold text-3xl">John Doe</h1>
                        <p className='text-[14px]'>28 years old, New York, NY</p>
                        <p className="text-green-600">Online</p>
                    </div>

                    <div className="flex gap-8">
                        <div className='leading-none text-center'>
                            <p className="font-bold text-lg">85%</p>
                            <label className='text-[14px]'>Profile Completion</label>
                        </div>
                        <div className='leading-none text-center'>
                            <p className="font-bold text-lg">247</p>
                            <label className='text-[14px]'>Profile Views</label>
                        </div>
                        <div className='leading-none'>
                            <p className="font-bold text-lg text-center">52</p>
                            <label className='text-[14px]'>Matches</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-start m-3 gap-2">
                <Link to="/publicview">
                    <button className="bg-black text-[12px] rounded-4xl text-white px-6 py-2 hover:bg-pink-600">
                        Public view
                    </button>
                </Link>
                
                <button className="bg-[#9334EB] text-[12px] rounded-4xl text-white px-6 py-2 hover:bg-[#AE2456]">
                    Edit Profile
                </button>
            </div>
        </section>
    );
}

export default ProfileHeroSection;
