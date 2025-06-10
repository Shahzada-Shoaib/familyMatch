import React, { useState } from "react";
import {
    FaUserAlt,
    FaHeart,
    FaStar,
    FaHeartbeat,
} from "react-icons/fa";

const tabs = [
    { name: "Personal", icon: <FaUserAlt size={18} /> },
    { name: "Lifestyle", icon: <FaHeart size={18} /> },
    { name: "Interests", icon: <FaStar size={18} /> },
    { name: "Health", icon: <FaHeartbeat size={18} /> },
];

const questionsMap = {
    Personal: [
        {
            id: 2,
            label: "Body Type",
            name: "bodyType111",
            type: "select",
            options: [
                { id: 1, label: "Muscular" },
                { id: 2, label: "Slim" },
                { id: 3, label: "Fat" }
            ]
        },
        {
            id: 3,
            label: "Ethinicity",
            name: "ethnicity11",
            type: "select",
            options: [
                { id: 4, label: "Asian" },
                { id: 5, label: "American" },
                { id: 6, label: "European" }
            ]
        },
        {
            id: 4,
            label: "Smoking Habits",
            name: "smokingHabits11",
            type: "select",
            options: [
                { id: 7, label: "Non-smoker" },
                { id: 8, label: "Occasional" },
                { id: 9, label: "Regular" }
            ]
        },
        {
            id: 5,
            label: "Marital Status",
            name: "maritalStatus11",
            type: "select",
            options: [
                { id: 10, label: "Single" },
                { id: 11, label: "Married" },
                { id: 12, label: "Divorced" },
                { id: 13, label: "Separated" }
            ]
        },
        {
            id: 6,
            label: "Qualification",
            name: "qualification11",
            type: "select",
            options: [
                { id: 14, label: "inter/A levels" },
                { id: 15, label: "bachelors" },
                { id: 16, label: "Masters" },
                { id: 17, label: "PhD" }
            ]
        },
        {
            id: 7,
            label: "Pets",
            name: "pets",
            type: "text"
        }
    ],
    Lifestyle: [
        {
            id: 8,
            label: "Travel Frequency",
            name: "travelFrequency",
            type: "select",
            options: [
                { id: 18, label: "Rarely" },
                { id: 19, label: "Sometimes" },
                { id: 20, label: "Often" }
            ]
        },
        {
            id: 9,
            label: "Work Schedule",
            name: "workSchedule",
            type: "select",
            options: [
                { id: 21, label: "Day" },
                { id: 22, label: "Night" },
                { id: 23, label: "Flexible" }
            ]
        }
    ],
    Interests: [
        {
            id: 10,
            label: "Favorite Music",
            name: "favoriteMusic",
            type: "multi-select",
            options: [
                { id: 24, label: "Pop" },
                { id: 25, label: "Rock" },
                { id: 26, label: "Jazz" },
                { id: 27, label: "Classical" },
                { id: 28, label: "Other" }
            ]
        }
    ],
    Health: [
        {
            id: 11,
            label: "Allergies",
            name: "allergies",
            type: "select",
            options: [
                { id: 29, label: "None" },
                { id: 30, label: "Food" },
                { id: 31, label: "Dust" },
                { id: 32, label: "Pollen" },
                { id: 33, label: "Other" }
            ]
        },
        {
            id: 12,
            label: "Medical Conditions",
            name: "medicalConditions",
            type: "select",
            options: [
                { id: 34, label: "None" },
                { id: 35, label: "Diabetes" },
                { id: 36, label: "Hypertension" },
                { id: 37, label: "Other" }
            ]
        }
    ]
};

const ProfileSettings = () => {
    const [activeTab, setActiveTab] = useState("Personal");
    const [formData, setFormData] = useState({
        Personal: {},
        Lifestyle: {},
        Interests: {},
        Health: {}
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [activeTab]: {
                ...prev[activeTab],
                [name]: value
            }
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        const prevValues = formData[activeTab][name] || [];
        const updatedValues = checked
            ? [...prevValues, Number(value)]
            : prevValues.filter((item) => item !== Number(value));

        setFormData((prev) => ({
            ...prev,
            [activeTab]: {
                ...prev[activeTab],
                [name]: updatedValues
            }
        }));
    };

    const handleTabChange = (tab) => setActiveTab(tab);

    const handleCancel = () => {
        setFormData((prev) => ({
            ...prev,
            [activeTab]: {}
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Form submitted! Check the console.");
    };


   
    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Profile Settings</h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 border-b border-gray-200 mb-8 overflow-x-auto">
                {tabs.map(({ name, icon }) => (
                    <button
                        key={name}
                        onClick={() => handleTabChange(name)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm sm:text-base font-semibold whitespace-nowrap border-b-2 transition ${activeTab === name
                            ? "text-pink-600 border-pink-600"
                            : "text-gray-500 border-transparent hover:text-pink-500"
                            }`}
                        aria-label={name}
                    >
                        <span className="text-gray-400">{icon}</span>
                        {name}
                    </button>
                ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {questionsMap[activeTab].map(({ id, label, name, type = "select", options }) => (
                    <div key={id} className="flex flex-col">
                        <label htmlFor={name} className="mb-2 text-gray-500 font-medium">
                            {label}
                        </label>

                        {type === "text" ? (
                            <input
                                type="text"
                                id={name}
                                name={name}
                                value={formData[activeTab][name] || ""}
                                onChange={handleInputChange}
                                placeholder={`Enter ${label.toLowerCase()}`}
                                className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                            />
                        ) : type === "multi-select" ? (
                            <div className="flex flex-wrap gap-3">
                                {options.map(({ id: optionId, label: optionLabel }) => {
                                    const selectedValues = formData[activeTab][name] || [];
                                    return (
                                        <label key={optionId} className="flex items-center gap-2 text-sm cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name={name}
                                                value={optionId}
                                                checked={selectedValues.includes(optionId)}
                                                onChange={handleCheckboxChange}
                                                className="accent-pink-600"
                                            />
                                            {optionLabel}
                                        </label>
                                    );
                                })}
                            </div>
                        ) : (
                            <select
                                id={name}
                                name={name}
                                value={formData[activeTab][name] || ""}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                            >
                                <option value="" disabled>
                                    Select an option
                                </option>
                                {options.map(({ id: optionId, label: optionLabel }) => (
                                    <option key={optionId} value={optionId}>
                                        {optionLabel}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                ))}

                {/* Buttons */}
                <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row justify-end items-center gap-4 mt-6">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="w-full sm:w-auto px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileSettings;
