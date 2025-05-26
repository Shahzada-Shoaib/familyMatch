import React, { useState } from "react";

const tabs = ["Personal", "Lifestyle", "Interests", "Health", "Kids"];

const ProfileSettings = () => {
    const [activeTab, setActiveTab] = useState("Personal");

    return (
        <div className="w-full ms-2 me-14 p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Profile Settings</h2>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-medium focus:outline-none ${activeTab === tab
                                ? "text-pink-600 border-b-2 border-pink-600"
                                : "text-gray-500"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Form */}
            {activeTab === "Personal" && (
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Drinking Habits
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-100 rounded"
                            placeholder=""
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Diet Preferences
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-100 rounded"
                            placeholder=""
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Smoking Habits
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-100 rounded"
                            placeholder=""
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Living Situation
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-100 rounded"
                            placeholder=""
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Exercise Frequency
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-100 rounded"
                            placeholder=""
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Pets
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-100 rounded"
                            placeholder=""
                        />
                    </div>

                    {/* Buttons */}
                    <div className="col-span-1 md:col-span-2 flex justify-end mt-4 space-x-4">
                        <button
                            type="button"
                            className="px-8 py-2 bg-gray-200 text-gray-700 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-2 bg-pink-600 text-white rounded-lg"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ProfileSettings;
