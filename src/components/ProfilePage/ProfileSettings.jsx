import React, { useState, useEffect } from "react";
import { FaUserAlt, FaHeart, FaStar, FaHeartbeat } from "react-icons/fa";

const ProfileSettings = () => {
    const [activeTab, setActiveTab] = useState("Personal");
    const [formData, setFormData] = useState({
        Personal: {},
        Lifestyle: {},
        Interests: {},
        Health: {},
    });
    const [questionsMap, setQuestionsMap] = useState({
        Personal: [],
        Lifestyle: [],
        Interests: [],
        Health: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [normalizedFormData, setNormalizedFormData] = useState({});
    // const [useful, setUseful] = useState({});

    // Fetch profile options from API
    useEffect(() => {
        const fetchProfileOptions = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "https://familymatch.aakilarose.com/api/profile_options",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "X-API-KEY": "123456",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                // console.log("API Response:", result);

                if (result.status && result.data) {
                    // Transform API data to match our component structure
                    const transformedData = {
                        Personal: result.data.personal || [],
                        Lifestyle: result.data.lifestyle || [],
                        Interests: result.data.interests || [],
                        Health: result.data.health || [],
                    };

                    // Transform the data structure to match our existing format
                    const processedData = {};
                    Object.keys(transformedData).forEach((key) => {
                        processedData[key] = transformedData[key].map((item) => ({
                            id: parseInt(item.id),
                            label: item.label,
                            abckey: item.update_key,
                            type: item.type || "select",
                            options: item.options
                                ? item.options.map((option) => ({
                                    id: parseInt(option.id),
                                    label: option.name,
                                }))
                                : undefined,
                        }));
                    });

                    setQuestionsMap(processedData);
                    // console.log("Profile options fetched successfully:", processedData);
                } else {
                    setError("Failed to fetch profile options");
                }
            } catch (err) {
                // console.error("Error fetching profile options:", err);
                setError("Error loading profile options");
            } finally {
                setLoading(false);
            }
        };

        fetchProfileOptions();
    }, []);


    useEffect(() => {
        const getUsefulData = (formData) => {
            const result = {};

            for (let key in formData) {
                const value = formData[key];

                if (value && typeof value === "object" && !Array.isArray(value)) {
                    for (let innerKey in value) {
                        result[innerKey] = value[innerKey];
                    }
                } else if (typeof value !== "object" && value !== null) {
                    result[key] = value;
                }
            }

            return result;
        };

        const cleanedData = getUsefulData(formData);
        // setUseful(cleanedData);
        setNormalizedFormData(cleanedData);
    }, [formData]); // runs whenever `data` changes

    const handleInputChange = (e) => {
        const { value } = e.target;
        const abckey = e.target.getAttribute("abckey"); // Use abckey instead of name

        setFormData((prev) => ({
            ...prev,
            [activeTab]: {
                ...prev[activeTab],
                [abckey]: value, // Update formData using abckey
            },
        }));
    };


    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        const abckey = e.target.getAttribute("abckey"); // Use abckey instead of name

        const prevValues = formData[activeTab][abckey] || [];
        const updatedValues = checked
            ? [...prevValues, Number(value)]
            : prevValues.filter((item) => item !== Number(value));

        setFormData((prev) => ({
            ...prev,
            [activeTab]: {
                ...prev[activeTab],
                [abckey]: updatedValues, // Update formData using abckey
            },
        }));
    };

    const handleTabChange = (tab) => setActiveTab(tab);

    const handleCancel = () => {
        setFormData((prev) => ({
            ...prev,
            [activeTab]: {},
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        console.log("Normalized Form Data:", normalizedFormData);
        alert("Form submitted! Check the console.");
    };

    if (loading) {
        return (
            <div className="w-full max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className="flex justify-center items-center h-64">
                    <div className="text-gray-500">Loading profile options...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className="flex justify-center items-center h-64">
                    <div className="text-red-500">{error}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
                Profile Settings
            </h2>
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 border-b border-gray-200 mb-8 overflow-x-auto">
                {["Personal", "Lifestyle", "Interests", "Health"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm sm:text-base font-semibold whitespace-nowrap border-b-2 transition ${activeTab === tab
                            ? "text-pink-600 border-pink-600"
                            : "text-gray-500 border-transparent hover:text-pink-500"
                            }`}
                        aria-label={tab}
                    >
                        <span className="text-gray-400">
                            {tab === "Personal" && <FaUserAlt size={18} />}
                            {tab === "Lifestyle" && <FaHeart size={18} />}
                            {tab === "Interests" && <FaStar size={18} />}
                            {tab === "Health" && <FaHeartbeat size={18} />}
                        </span>
                        {tab}
                    </button>
                ))}
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
                {questionsMap[activeTab] && questionsMap[activeTab].length > 0 ? (
                    questionsMap[activeTab].map(
                        ({ id, label, abckey, type = "select", options }) => (
                            <div key={id} className="flex flex-col">
                                <label
                                    htmlFor={abckey}
                                    className="mb-2 text-gray-500 font-medium"
                                >
                                    {label}
                                </label>

                                {type === "text" ? (
                                    <input
                                        type="text"
                                        id={abckey}
                                        abckey={abckey}
                                        value={formData[activeTab][abckey] || ""}
                                        onChange={handleInputChange}
                                        placeholder={`Enter ${label.toLowerCase()}`}
                                        className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                                    />
                                ) : type === "multi-select" ? (
                                    <div className="flex flex-wrap gap-3">
                                            {options &&
                                                options.map(({ id: optionId, label: optionLabel }) => {
                                                    const selectedValues =
                                                        formData[activeTab][abckey] || [];
                                                    return (
                                                    <label
                                                        key={optionId}
                                                        className="flex items-center gap-2 text-sm cursor-pointer"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            abckey={abckey}
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
                                                id={abckey}
                                                abckey={abckey}
                                                value={formData[activeTab][abckey] || ""}
                                                onChange={handleInputChange}
                                                className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                                            >
                                                <option value="" disabled>
                                                    Select an option
                                                </option>
                                        {options &&
                                            options.map(({ id: optionId, label: optionLabel }) => (
                                                <option key={optionId} value={optionId}>
                                                    {optionLabel}
                                                </option>
                                            ))}
                                       </select>
                                )}
                            </div>
                        )
                    )
                ) : (
                    <div className="col-span-1 sm:col-span-2 text-center text-gray-500 py-8">
                        No options available for this tab.
                    </div>
                )}

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