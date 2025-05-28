import React from 'react';
import { FaMapMarkerAlt, FaHeart, FaBook, FaMusic, FaEnvelope } from 'react-icons/fa';

const ProfileCard = () => {
    const profile = {
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Sarah',
        age: 27,
        location: 'Los Angeles, CA',
        goal: 'Serious Relationship',
        education: 'Master\'s in Psychology',
        hobbies: 'Yoga, Art, Travel, Music',
        bio: "Passionate about mindfulness, creativity, and building a meaningful connection. Let's grow together.",
    };

    return (
        <div className="w-80 h-[520px] p-6 rounded-2xl backdrop-blur-md bg-[#AE2456]/10 border border-white/20 shadow-lg hover:shadow-xl transition flex flex-col justify-between">

            {/* Top Section */}
            <div className="flex flex-col items-center text-center">
                <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-46 h-46 object-cover rounded-full border-8 border-white shadow-md mb-4"
                />
                <h2 className="text-xl font-bold text-gray-800">
                    {profile.name}, {profile.age}
                </h2>
                <p className="text-[#AE2456] font-medium flex items-center gap-1">
                    <FaMapMarkerAlt /> {profile.location}
                </p>
                <p className="text-sm text-gray-600 mt-3 px-2">{profile.bio}</p>
            </div>

            {/* Info */}
            <div className="mt-4 text-sm text-gray-700 space-y-2">
                <p className="flex items-center gap-2">
                    <FaHeart className="text-[#AE2456]" />
                    Looking for: <span className="font-medium">{profile.goal}</span>
                </p>
                <p className="flex items-center gap-2">
                    <FaBook className="text-[#AE2456]" />
                    Education: <span className="font-medium">{profile.education}</span>
                </p>
                <p className="flex items-center gap-2">
                    <FaMusic className="text-[#AE2456]" />
                    Hobbies: <span className="font-medium">{profile.hobbies}</span>
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-5 flex gap-3 justify-center">
                <button className="bg-[#9334EB] text-white px-4 py-2 rounded-3xl hover:bg-[#AE2456]/90 text-sm font-medium flex items-center gap-2">
                    <FaEnvelope /> Message
                </button>
                <button className="border border-[#AE2456] text-[#AE2456] px-4 py-2 rounded-3xl hover:bg-[#AE2456]/10 text-sm font-medium flex items-center gap-2">
                    <FaHeart className="text=[]" /> Like
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
