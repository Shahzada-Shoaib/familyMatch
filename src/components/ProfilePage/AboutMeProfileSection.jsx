import React, { useState, useEffect } from "react";
import {
    FaUser, FaUsers, FaTrashAlt, FaBriefcase,
    FaBirthdayCake, FaUserTie, FaHome
} from "react-icons/fa";
import axios from 'axios';
import { getAuthToken } from "../../../utils/authToken";
import Button from "../Button";

const AboutMeProfileSection = () => {
    const [activeTab, setActiveTab] = useState("me");
    const [formData, setFormData] = useState({
        fullName: "",
        dob: "",
        location: "",
        bio: "",
        gender: ""
    });

    const [familyMemberInput, setFamilyMemberInput] = useState({
        name: "",
        relation: "",
        dob: "",
        occupation: "",
    });

    const [allFamilyMembers, setAllFamilyMembers] = useState([]);
    const [profileData, setProfileData] = useState(null);
    const token = getAuthToken();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFamilyInputChange = (e) => {
        const { name, value } = e.target;
        setFamilyMemberInput(prev => ({ ...prev, [name]: value }));
    };

    const addFamilyMember = async (e) => {
        e.preventDefault();

        if (!familyMemberInput.name.trim()) {
            alert("Please enter the family member's name.");
            return;
        }

        try {
            const form = new FormData();
            Object.entries(familyMemberInput).forEach(([key, value]) => {
                form.append(key, value);
            });

            const response = await axios.post(
                'https://familymatch.aakilarose.com/api/childern/add',
                form,
                {
                    headers: {
                        'X-API-KEY': '123456',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            const newMember = {
                id: response.data.data?.id || Date.now(),
                name: familyMemberInput.name,
                relation: familyMemberInput.relation,
                dob: familyMemberInput.dob,
                occupation: familyMemberInput.occupation,
            };

            setAllFamilyMembers(prev => [...prev, newMember]);
            setFamilyMemberInput({ name: "", relation: "", dob: "", occupation: "" });

        } catch (error) {
            alert(error.response?.data?.message || error.message);
        }
    };

    const deleteFamilyMember = async (id) => {
        console.log("Deleting member with ID:", id);
        if (!window.confirm("Are you sure you want to delete this member?")) return;

        try {
            const res = await axios.get(
                `https://familymatch.aakilarose.com/api/delete-childern/${id}`,
                // { id },
                {
                    headers: {
                        'X-API-KEY': '123456',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            if (res.data.status) {
                setAllFamilyMembers(prev => prev.filter(member => member.id !== id));
            } else {
                alert("Failed to delete member.");
            }
        } catch (error) {
            alert(error.response?.data?.message || error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Saved:", formData, allFamilyMembers);
        alert("Data saved successfully!");
    };

    const handleCancel = () => {
        setFormData({ fullName: "", dob: "", location: "", bio: "", gender: "" });
        setAllFamilyMembers([]);
        setFamilyMemberInput({ name: "", relation: "", dob: "", occupation: "" });
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get('https://familymatch.aakilarose.com/api/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const data = res.data.data;
                setProfileData(data);

                if (data?.childerns?.length) {
                    setAllFamilyMembers(data.childerns);
                }
            } catch (err) {
                alert("Failed to load profile");
            }
        };
        fetchProfile();
    }, []);

    useEffect(() => {
        if (profileData) {
            setFormData({
                fullName: profileData.full_name || '',
                dob: profileData.dob || '',
                location: profileData.country || '',
                bio: profileData.bio || '',
                gender: profileData.gender || ''
            });
        }
    }, [profileData]);

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex border-b mb-6">
                <button
                    onClick={() => setActiveTab("me")}
                    className={`px-6 py-3 font-semibold ${activeTab === "me" ? "border-b-4 border-pink-600 text-pink-600" : "text-gray-600"}`}
                >
                    <FaUser /> About Me
                </button>
                <button
                    onClick={() => setActiveTab("family")}
                    className={`px-6 py-3 font-semibold ${activeTab === "family" ? "border-b-4 border-pink-600 text-pink-600" : "text-gray-600"}`}
                >
                    <FaUsers /> About My Family
                </button>
            </div>

            {activeTab === "me" && (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" className="border p-2 rounded" />
                    <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="border p-2 rounded" />
                    <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} placeholder="Gender" className="border p-2 rounded" />
                    <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" className="border p-2 rounded" />
                    <textarea name="bio" value={formData.bio} onChange={handleInputChange} rows={4} placeholder="Short Bio" className="border p-2 rounded col-span-2" />
                </form>
            )}

            {activeTab === "family" && (
                <>
                    <form onSubmit={addFamilyMember} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <input type="text" name="name" value={familyMemberInput.name} onChange={handleFamilyInputChange} placeholder="Name" className="border p-2 rounded" required />
                        <input type="text" name="relation" value={familyMemberInput.relation} onChange={handleFamilyInputChange} placeholder="Relation" className="border p-2 rounded" />
                        <input type="date" name="dob" value={familyMemberInput.dob} onChange={handleFamilyInputChange} className="border p-2 rounded" />
                        <input type="text" name="occupation" value={familyMemberInput.occupation} onChange={handleFamilyInputChange} placeholder="Occupation" className="border p-2 rounded" />
                        <div className="sm:col-span-2 text-right">
                            <Button type="submit" variant="primary">Add Member</Button>
                            {/* <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">Add Member</button> */}
                        </div>
                    </form>

                    {allFamilyMembers.length > 0 && (
                        <ul className="space-y-4">
                            {allFamilyMembers.map((member, index) => (
                                <li key={index} className="flex items-center justify-between p-4 shadow-md rounded bg-gray-50">
                                    <div className="space-y-1">
                                        <div className="flex">
                                            <p className="w-24 font-semibold">Name:</p>
                                            <p className="font-bold">{member.name}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="w-24 font-semibold">Relation:</p>
                                            <p>{member.relation}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="w-24 font-semibold">DOB:</p>
                                            <p>{member.dob}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="w-24 font-semibold">Occupation:</p>
                                            <p>{member.occupation}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => deleteFamilyMember(member.id)} className="text-red-600 hover:text-red-800">
                                        <FaTrashAlt />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}

            <div className="flex justify-end gap-4 mt-8">
                <Button variant="cancel" onClick={handleCancel} > cancel</Button>
                {/* <button onClick={handleCancel} className="px-4 py-2 bg-gray-200 rounded">Cancel</button> */}
                <Button variant="primary" onClick={handleSubmit} >Save Changes</Button>
                {/* <button onClick={handleSubmit} className="px-4 py-2 bg-pink-600 text-white rounded">Save Changes</button> */}
            </div>
        </div>
    );
};

export default AboutMeProfileSection;
