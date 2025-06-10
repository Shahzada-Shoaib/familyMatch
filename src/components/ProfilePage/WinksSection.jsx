import React from "react";
import { FaRegSmileWink, FaArrowRight } from "react-icons/fa";

const Winks = () => {
    const winks = [
        { name: "Alice", photo: "https://randomuser.me/api/portraits/women/65.jpg" },
        { name: "Mark", photo: "https://randomuser.me/api/portraits/men/72.jpg" },
        { name: "Clara", photo: "https://randomuser.me/api/portraits/women/29.jpg" },
        { name: "James", photo: "https://randomuser.me/api/portraits/men/88.jpg" },
        { name: "Sophia", photo: "https://randomuser.me/api/portraits/women/12.jpg" },
    ];

    return (
        <div className="w-84 md:w-full max-w-6xl mx-auto px-4 py-6 bg-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-bold text-pink-600 mb-4 sm:mb-6">Winks</h2>

            <div className="relative">
                {/* Scrollable avatars container */}
                <div
                    className="flex space-x-4 overflow-x-auto pb-2 pr-4"
                    style={{
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "thin",
                        scrollbarColor: "#ec4899 #fce7f3",
                    }}
                >
                    {/* Scoped scrollbar styles for this container only */}
                    <style>
                        {`
                            .scroll-container::-webkit-scrollbar {
                                height: 6px;
                            }
                            .scroll-container::-webkit-scrollbar-track {
                                background: #fce7f3;
                                border-radius: 9999px;
                            }
                            .scroll-container::-webkit-scrollbar-thumb {
                                background-color: #ec4899;
                                border-radius: 9999px;
                            }
                            .scroll-container::-webkit-scrollbar-thumb:hover {
                                background-color: #db2777;
                            }
                        `}
                    </style>

                    <div className="scroll-container flex space-x-4">
                        {winks.map((user, idx) => (
                            <div key={idx} className="flex-shrink-0 flex flex-col items-center w-20">
                                <div className="relative">
                                    <img
                                        src={user.photo}
                                        alt={user.name}
                                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-pink-200 shadow-md object-cover"
                                    />
                                    <div className="absolute bottom-0 right-0 bg-pink-500 text-white rounded-full p-1 border-2 border-white">
                                        <FaRegSmileWink size={14} />
                                    </div>
                                </div>

                                <span className="mt-2 text-xs font-semibold text-gray-700 text-center truncate w-full">
                                    {user.name}
                                </span>

                                <button
                                    className="mt-1 px-2 py-1 bg-pink-100 text-pink-600 text-xs rounded-full hover:bg-pink-200 transition"
                                    aria-label={`Send Wink to ${user.name}`}
                                >
                                    Send Wink
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right scroll arrow (optional - hidden on small screens) */}
                <button
                    aria-label="Scroll right"
                    className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-600 text-white rounded-full p-2 shadow-lg hover:bg-pink-700 transition"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Winks;
