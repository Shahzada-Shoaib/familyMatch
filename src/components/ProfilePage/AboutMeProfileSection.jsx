import React, { useState } from "react";
import { FaUser, FaUsers, FaTrashAlt, FaBriefcase, FaBirthdayCake, FaUserTie, FaHome } from "react-icons/fa";

const AboutMeProfileSection = () => {
    const [activeTab, setActiveTab] = useState("me");

    const [formData, setFormData] = useState({
        fullName: "",
        dob: "",
        location: "",
        bio: "",
    });

    const [familyMemberInput, setFamilyMemberInput] = useState({
        name: "",
        relation: "",
        age: "",
        occupation: "",
    });

    const [familyMembers, setFamilyMembers] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFamilyInputChange = (e) => {
        const { name, value } = e.target;
        setFamilyMemberInput((prev) => ({ ...prev, [name]: value }));
    };

    const addFamilyMember = (e) => {
        e.preventDefault();

        if (!familyMemberInput.name.trim()) {
            alert("Please enter the family member's name.");
            return;
        }

        setFamilyMembers((prev) => [...prev, familyMemberInput]);
        setFamilyMemberInput({ name: "", relation: "", age: "", occupation: "" });
    };

    const deleteFamilyMember = (index) => {
        setFamilyMembers((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("About Me Data:", formData);
        console.log("Family Members:", familyMembers);
        alert("Data saved! Check the console.");
    };

    const handleCancel = () => {
        setFormData({ fullName: "", age: "", location: "", bio: "" });
        setFamilyMembers([]);
        setFamilyMemberInput({ name: "", relation: "", age: "", occupation: "" });
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Tabs */}
            <div className="flex border-b border-gray-300 mb-8">
                <button
                    onClick={() => setActiveTab("me")}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${activeTab === "me"
                            ? "border-b-4 border-pink-600 text-pink-600"
                            : "text-gray-600 hover:text-pink-500"
                        }`}
                >
                    <FaUser size={20} />
                    About Me
                </button>
                <button
                    onClick={() => setActiveTab("family")}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${activeTab === "family"
                            ? "border-b-4 border-pink-600 text-pink-600"
                            : "text-gray-600 hover:text-pink-500"
                        }`}
                >
                    <FaUsers size={20} />
                    About My Family
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === "me" && (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fullName" className="flex items-center gap-2 text-gray-600 font-medium mb-2">
                            <FaUserTie /> Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="dob" className="flex items-center gap-2 text-gray-600 font-medium mb-2">
                            <FaBirthdayCake /> Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dob"    
                            name="dob"
                            value={formData.age}
                            onChange={handleInputChange}
                            placeholder="Enter your age"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="gender"> Gender</label>
                        <input 
                        type="text"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                         />
                    </div>

                    <div>
                        <label htmlFor="location" className="flex items-center gap-2 text-gray-600 font-medium mb-2">
                            <FaHome /> Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="City or Country"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="bio" className="text-gray-600 font-medium mb-2 block">
                            Short Bio
                        </label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            rows={5}
                            placeholder="Write a short bio about yourself"
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                </form>
            )}

            {activeTab === "family" && (
                <>
                    <form onSubmit={addFamilyMember} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div>
                            <label htmlFor="name" className="flex items-center gap-2 text-gray-600 font-medium mb-2">
                                <FaUserTie /> Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={familyMemberInput.name}
                                onChange={handleFamilyInputChange}
                                placeholder="Family member's name"
                                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="relation" className="flex items-center gap-2 text-gray-600 font-medium mb-2">
                                <FaUsers /> Relation
                            </label>
                            <input
                                type="text"
                                id="relation"
                                name="relation"
                                value={familyMemberInput.relation}
                                onChange={handleFamilyInputChange}
                                placeholder="Relation (e.g. Father, Sister)"
                                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="age" className="flex items-center gap-2 text-gray-600 font-medium mb-2">
                                <FaBirthdayCake /> Age
                            </label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={familyMemberInput.age}
                                onChange={handleFamilyInputChange}
                                placeholder="Age"
                                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="occupation" className="flex items-center gap-2 text-gray-600 font-medium mb-2">
                                <FaBriefcase /> Occupation
                            </label>
                            <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                value={familyMemberInput.occupation}
                                onChange={handleFamilyInputChange}
                                placeholder="Occupation / Role"
                                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        <div className="sm:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-md transition"
                            >
                                Add Family Member
                            </button>
                        </div>
                    </form>

                    {/* Family Members List */}
                    {familyMembers.length > 0 && (
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Family Members</h3>
                            <ul className="space-y-6">
                                {familyMembers.map((member, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
                                    >
                                        {/* Placeholder avatar image */}
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                                member.name
                                            )}&background=ec4899&color=fff&size=64`}
                                            alt={member.name}
                                            className="w-16 h-16 rounded-full mr-6 flex-shrink-0"
                                        />

                                        <div className="flex-grow">
                                            <p className="text-lg font-semibold text-gray-800">{member.name}</p>
                                            <p className="text-gray-600 flex items-center gap-2">
                                                <FaUsers /> {member.relation || "Relation not specified"}
                                            </p>
                                            <p className="text-gray-600 flex items-center gap-2">
                                                <FaBirthdayCake /> {member.age || "Age not specified"}
                                            </p>
                                            <p className="text-gray-600 flex items-center gap-2">
                                                <FaBriefcase /> {member.occupation || "Occupation not specified"}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => deleteFamilyMember(idx)}
                                            className="ml-6 p-2 rounded-full text-white bg-red-600 hover:bg-red-700 transition"
                                            aria-label={`Delete family member ${member.name}`}
                                        >
                                            <FaTrashAlt size={18} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mt-12">
                <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-2 rounded-md bg-pink-600 text-white hover:bg-pink-700 transition"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default AboutMeProfileSection;
