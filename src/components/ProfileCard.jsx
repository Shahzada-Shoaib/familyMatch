import React from 'react';
import { FaMapMarkerAlt, FaHeart, FaBook, FaMusic, FaEnvelope, FaPrayingHands, FaSmileWink, FaRing } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({profile}) => {
    const navigate = useNavigate();

    const handleclick = () => {
        navigate(`/publicview/${profile.user_id}`);
    }

    return (
        <div className="max-w-sm w-full h-auto p-2 rounded-3xl backdrop-blur-md bg-[#AE2456]/10  border-white/20 shadow-lg hover:shadow-xl transition flex flex-col justify-between"
            onClick={handleclick}>
            {/* Top Section */}
            <div className="flex flex-col items-center text-center ">
                <img
                    src={profile?.profile_image}
                    alt={profile?.full_name || 'Profile Image'}
                    className="w-full h-46 object-cover rounded-3xl  border-2 border-white shadow-md mb-4"
                />
                <div className=''>
                    <h2 className="text-xl font-bold text-gray-800">
                        {profile?.full_name}, {profile?.age} -id {profile.user_id}
                    </h2>
                    <p className="text-[#AE2456] font-medium flex items-center gap-1">
                        <FaMapMarkerAlt /> {profile?.location} New York, USA
                    </p>
                    <p className="text-sm text-gray-600 mt-3 px-2">{profile?.bio}</p>
                </div>
               
            </div>



            <div className='p-6'>
                <div className="mt-4 text-sm text-gray-700 space-y-2 px-2">
                    {/* <p className="flex items-center gap-2">
                    <FaHeart className="text-[#AE2456]" />
                    Looking for: <span className="font-medium">{profile?.goal}</span>
                </p> */}
                    <p className="flex items-center gap-2">
                        <FaBook className="text-[#AE2456]" />
                        Education: <span className="font-medium">{profile?.qualification}</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaMusic className="text-[#AE2456]" />
                        Hobbies: <span className="font-medium">{profile?.hobbies}</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaPrayingHands className="text-[#AE2456]" />
                        Religion: <span className="font-medium">{profile?.religion}</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaRing className="text-[#AE2456]" />
                        Marital Status: <span className="font-medium">{profile?.ms_name}</span>
                    </p>

                </div>

                {/* CTA Buttons */}
                <div className="mt-5 flex gap-3 justify-center px-2">
                    {/* Envelope Button */}
                    <div className="relative group">
                        <button className="bg-[#9334EB] text-white px-4 py-2 rounded-3xl hover:bg-[#AE2456]/90 text-sm font-medium flex items-center gap-2">
                            <FaEnvelope />
                        </button>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                            Send Message
                        </span>
                    </div>

                    {/* Heart Button */}
                    <div className="relative group">
                        <button className="border border-[#AE2456] text-[#AE2456] px-4 py-2 rounded-3xl hover:bg-[#AE2456]/10 text-sm font-medium flex items-center gap-2">
                            <FaHeart />
                        </button>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                            Like Profile
                        </span>
                    </div>

                    {/* Wink Button */}
                    <div className="relative group">
                        <button className="bg-[#AE2456] text-white px-4 py-2 rounded-3xl hover:bg-[#AE2456]/90 text-sm font-medium flex items-center gap-2">
                            <FaSmileWink />
                        </button>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                            Send Wink 😉
                        </span>
                    </div>
                </div>

            </div>


            {/* Info */}
          


        </div>
    );
};

export default ProfileCard;
