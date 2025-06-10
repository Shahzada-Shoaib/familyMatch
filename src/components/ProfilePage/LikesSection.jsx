import React from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";

const LikesSection = () => {
    const likes = [
        {
            name: "Ava Lee",
            photo: "https://randomuser.me/api/portraits/women/52.jpg",
            location: "New York, USA",
        },
        {
            name: "Lucas Patel",
            photo: "https://randomuser.me/api/portraits/men/45.jpg",
            location: "London, UK",
        },
        {
            name: "Mia Chen",
            photo: "https://randomuser.me/api/portraits/women/68.jpg",
            location: "Tokyo, Japan",
        },
        {
            name: "Noah Kim",
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
            location: "Seoul, South Korea",
        },
        {
            name: "Lucas Patel",
            photo: "https://randomuser.me/api/portraits/men/45.jpg",
            location: "London, UK",
        },
        {
            name: "Mia Chen",
            photo: "https://randomuser.me/api/portraits/women/68.jpg",
            location: "Tokyo, Japan",
        },
        {
            name: "Noah Kim",
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
            location: "Seoul, South Korea",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-xl font-semibold text-pink-600 mb-6">People Who Liked You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {likes.map((user, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg hover:shadow-md transition"
                    >
                        <div className="flex items-center space-x-3">
                            <img
                                src={user.photo}
                                alt={user.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="text-sm">
                                <div className="font-semibold text-gray-800">{user.name}</div>
                                <div className="text-gray-500 text-xs">{user.location}</div>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                className="p-2 rounded-full text-pink-600 hover:bg-pink-50 transition"
                                title="Message"
                            >
                                <FaEnvelope size={14} />
                            </button>
                            <button
                                className="p-2 rounded-full text-pink-600 hover:bg-pink-50 transition"
                                title="View Profile"
                            >
                                <FaUser size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LikesSection;
