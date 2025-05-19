// import React, { useRef, useState } from "react";

// const ImageUploader = () => {
//     const fileInputRef = useRef(null);
//     const [imagePreview, setImagePreview] = useState(null);

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => setImagePreview(reader.result);
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleUploadClick = () => {
//         fileInputRef.current.click();
//     };

//     return (
//         <div className="flex flex-col items-center space-y-4">
//             {/* Hidden file input */}
//             <input
//                 type="file"
//                 accept="image/*"
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 className="hidden"
//             />

//             {/* Custom button */}
//             <button
//                 onClick={handleUploadClick}
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition"
//             >
//                 Upload Image
//             </button>

//             {/* Image preview */}
//             {imagePreview && (
//                 <img
//                     src={imagePreview}
//                     alt="Preview"
//                     className="w-48 h-48 object-cover rounded-lg border"
//                 />
//             )}
//         </div>
//     );
// };

// export default ImageUploader;


//
//
//
import React, { useRef, useState } from "react";

const ImageUploader = () => {
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
            return;
        }

        const formData = new FormData();
        formData.append("image", file);

        setLoading(true);

        const token = localStorage.getItem('authToken');
        if (!token) {
            console.log("No token found, user might not be logged in");
            return;
        }

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            const raw = await response.text();
            console.log("Raw response:", raw);

            // Try to split and parse malformed JSON
            const parts = raw.split('}{').map((part, index, arr) => {
                if (index === 0) return part + '}';
                if (index === arr.length - 1) return '{' + part;
                return '{' + part + '}';
            });

            const responses = parts.map(str => {
                try {
                    return JSON.parse(str);
                } catch (e) {
                    return null;
                }
            }).filter(Boolean);

            const success = responses.find(r => r.status === true || r.status === "success");
            const error = responses.find(r => r.status === "error");

            if (success) {
                alert("Image uploaded successfully! Media ID: " + success.media_id);
            } else if (error) {
                alert("Upload failed: " + error.message);
            } else {
                alert("Unexpected response.");
            }

        } catch (error) {
            console.error("Upload error:", error);
            alert("Upload failed: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            {/* Hidden file input */}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />

            {/* Trigger Button */}
            <button
                onClick={handleUploadClick}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition"
            >
                Choose Image
            </button>

            {/* Preview and Submit */}
            {imagePreview && (
                <>
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-48 h-48 object-cover rounded-lg border"
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition disabled:opacity-50"
                    >
                        {loading ? "Uploading..." : "Submit Image"}
                    </button>
                </>
            )}
        </div>
    );
};

export default ImageUploader;
