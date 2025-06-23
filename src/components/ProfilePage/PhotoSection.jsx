import React, { useState } from "react";
import {
    TrashIcon,
    CameraIcon,
    PhotoIcon,
    XMarkIcon,
    CheckIcon,
} from "@heroicons/react/24/solid";

const defaultFamilyPhotos = [
    "https://placehold.co/300x200?text=Family+1",
    "https://placehold.co/300x200?text=Family+2",
    "https://placehold.co/300x200?text=Family+3",
];

const PhotoSection = () => {
    const [familyPhotos, setFamilyPhotos] = useState(defaultFamilyPhotos);

    const handleFamilyPhotosChange = (e) => {
        const files = Array.from(e.target.files);
        const previews = files.map((file) => URL.createObjectURL(file));
        setFamilyPhotos((prev) => [...prev, ...previews]);
    };

    const removeFamilyPhoto = (indexToRemove) => {
        setFamilyPhotos((prev) =>
            prev.filter((_, index) => index !== indexToRemove)
        );
    };

    const handleSave = () => {
        alert("Photos saved successfully!");
    };

    const handleReset = () => {
        setFamilyPhotos(defaultFamilyPhotos);
    };

    return (
        <div className="w-full px-4 py-6 sm:px-6 md:px-8 bg-white shadow-md rounded-xl max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <CameraIcon className="h-7 w-7 text-pink-600" />
                Photo Settings
            </h2>

            {/* Family Photos */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                    <PhotoIcon className="h-5 w-5 text-gray-500" />
                    Family Photos
                </label>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFamilyPhotosChange}
                    className="mb-3 text-sm"
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {familyPhotos.map((photo, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                        >
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
                        </div>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-4">
                <button
                    className="w-full sm:w-auto px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 flex items-center gap-2"
                    onClick={handleReset}
                >
                    <XMarkIcon className="h-5 w-5" />
                    Cancel
                </button>
                <button
                    className="w-full sm:w-auto px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 flex items-center gap-2"
                    onClick={handleSave}
                >
                    <CheckIcon className="h-5 w-5" />
                    Save
                </button>
            </div>
        </div>
    );
};

export default PhotoSection;
