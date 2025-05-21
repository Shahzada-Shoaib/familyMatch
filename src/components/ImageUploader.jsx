
import React, { useRef, useState } from "react";
import camera from "../../public/icons/camera.svg"; // Adjust the path as necessary

const ImageUploader = ({ onButtonClick }) => {
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result);
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };


    const handleSubmit = async () => {
        if (!file) {
            alert("No file selected");
            return false; // Return false if no file is selected
        }

        const formData = new FormData();
        formData.append("image", file);
        formData.append("type", "Profile");

        setLoading(true);

        const token = localStorage.getItem('authToken');
        if (!token) {
            console.log("No token found, user might not be logged in");
            setLoading(false);
            return false; // Return false if no token is found
        }

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await response.json(); // Parse the JSON response
            console.log("API Response:", data);

            if (data.status === true) {
                alert("Image uploaded successfully! Media ID: " + data.media_id);
                return true; // Return true if the upload is successful
            } else {
                alert("Upload failed: " + (data.message || "Unknown error"));
                return false; // Return false if the upload fails
            }

        } catch (error) {
            console.error("Upload error:", error);
            alert("Upload failed: " + error.message);
            return false; // Return false if there is an error
        } finally {
            setLoading(false);
        }
    };

    const handleCombinedClick = async () => {
        const success = await handleSubmit(); // handleSubmit must return true/false

        if (success) {
            onButtonClick(); // go to next page
        } else {
            console.log("API failed, staying on the current page.");
        }
    };



    return (
        <div className="flex flex-col items-center space-y-4">
            <p className="">Pro tip: Smiling photos receive more attention</p>
            {/* Hidden file input */}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />

            {/* Trigger Button */}
            {/* <button
                onClick={handleUploadClick}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition"
            >
                Choose Image
            </button> */}

            {!imagePreview && (
                <button
                    onClick={handleUploadClick}
                    className="cursor-pointer hover:opacity-80 border rounded-lg w-48 h-48 flex items-center justify-center bg-pink shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                    <img className="w-12 h-12" src={camera} alt="image" />
                </button>
            )

            }

            {/* <button
                onClick={handleUploadClick}
                className=" border rounded-lg w-[200px] h-[200px] flex items-center justify-center bg-pink shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <img className="w-12 h-12" src={camera} alt="image" />
            </button> */}

            {/* Preview and Submit */}
            {imagePreview && (
                <>
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-48 h-48 object-cover rounded-lg border"
                    />
                    <button
                        onClick={handleCombinedClick}
                        disabled={loading}
                        className="bg-[#AE2456]  text-white px-12 py-3 rounded-4xl transition-transform  hover:scale-105  disabled:opacity-50"
                    >
                        {loading ? "Uploading..." : "Upload Photo"}
                    </button>
                </>
            )}
        </div>
    );
};

export default ImageUploader;
