import React, { useEffect, useRef, useState } from "react";
import {
    TrashIcon,
    CameraIcon,
    PhotoIcon,
    PlusIcon
} from "@heroicons/react/24/solid";
import { handleImageUpload } from "./handleImageUpload";
import { API_BASE_URL } from "../../config";
import axios from "axios";
import { getAuthToken } from "../../../utils/authToken";

const defaultFamilyPhotos = [
    "https://placehold.co/300x200?text=Family+1",
    "https://placehold.co/300x200?text=Family+2",
    "https://placehold.co/300x200?text=Family+3",
];

const PhotoSection = () => {
    const [familyPhotos, setFamilyPhotos] = useState(defaultFamilyPhotos);
    const [uploadingIndexes, setUploadingIndexes] = useState([]);
    const fileInputRef = useRef(null);

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);  // optional loading state
    // const [error, setError] = useState(null);  

    const handleClickAddPhoto = () => {
        fileInputRef.current.click();
    };

    const handleFamilyPhotosChange = async (e) => {
        const files = Array.from(e.target.files);

        for (const file of files) {
            const tempUrl = URL.createObjectURL(file);
            const newIndex = familyPhotos.length;

            // Set temp preview and mark uploading
            setFamilyPhotos((prev) => [...prev, tempUrl]);
            setUploadingIndexes((prev) => [...prev, newIndex]);

            const fakeEvent = { target: { files: [file] } };
            await handleImageUpload({
                e: fakeEvent,
                endpoint: `${API_BASE_URL}/upload`,
                type: 'Family',
                onPreview: () => { }, // already handled above
                onSuccess: (res) => {
                    const uploadedUrl = res?.data?.data?.url;
                    console.log("res?.data?.data?.url", res.gallery)
                    console.log("Uploaded URL:", uploadedUrl);
                    if (uploadedUrl) {
                        setFamilyPhotos((prev) => {
                            const updated = [...prev];
                            updated[newIndex] = uploadedUrl;
                            return updated;
                        });
                    }

                    // ✅ Remove loader after success
                    setUploadingIndexes((prev) =>
                        prev.filter((i) => i !== newIndex)
                    );
                },
                onError: (err) => {
                    alert('Failed to upload image: ' + err.message);
                    setFamilyPhotos((prev) =>
                        prev.filter((_, index) => index !== newIndex)
                    );

                    // ✅ Also remove from uploading indexes on error
                    setUploadingIndexes((prev) =>
                        prev.filter((i) => i !== newIndex)
                    );
                },
            });

        }
    };


    const removeFamilyPhoto = (indexToRemove) => {
        setFamilyPhotos((prev) =>
            prev.filter((_, index) => index !== indexToRemove)
        );
    };

    const fetchProfile = async () => {
        const token = getAuthToken();
        try {
            const response = await axios.get('https://familymatch.aakilarose.com/api/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // setProfileData(response.data.data);
            console.log("response.data.data", response.data.data.gallery);
        } catch (error) {
            console.error('Error fetching profile:', error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    useEffect(() => {
        fetchProfile();
    })
    return (
        <div className="w-full px-6 py-8 bg-white shadow-md rounded-xl max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <CameraIcon className="h-7 w-7 text-pink-600" />
                Photo Settings
            </h2>

            <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <PhotoIcon className="h-5 w-5 text-gray-500" />
                    <span className="text-lg font-medium text-gray-700">Family Photos</span>
                </div>

                <input
                    type="file"
                    accept="image/*"
                    multiple
                    ref={fileInputRef}
                    onChange={handleFamilyPhotosChange}
                    className="hidden"
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {/* Upload New */}
                    <div
                        onClick={handleClickAddPhoto}
                        className="cursor-pointer border-2 border-dashed border-pink-400 rounded-lg flex items-center justify-center h-32 hover:bg-pink-50 transition"
                    >
                        <PlusIcon className="h-10 w-10 text-pink-500" />
                    </div>

                    {/* Family Photos */}
                    {familyPhotos.map((photo, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                        >
                            {uploadingIndexes.includes(index) ? (
                                <div className="w-full h-32 flex items-center justify-center bg-gray-100">
                                    <div className="loader" />
                                </div>
                            ) : (
                                <>
                                        <img
                                            src={photo}
                                            alt={`Family ${index + 1}`}
                                            className="w-full h-32 object-cover"
                                        />
                                        <button
                                            onClick={() => removeFamilyPhoto(index)}
                                            className="absolute top-1 right-1 bg-white rounded-full p-1 shadow hidden group-hover:block"
                                        >
                                            <TrashIcon className="h-5 w-5 text-red-500" />
                                        </button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhotoSection;
