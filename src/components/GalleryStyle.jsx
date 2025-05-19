import React, { useState, useEffect } from 'react';

const values = [
    { id: 1, label: 'Compassion', icon: '💖' },
    { id: 2, label: 'Respect', icon: '🌿' },
    { id: 3, label: 'Gratitude', icon: '🌟' },
    { id: 4, label: 'Loyalty', icon: '🔗' },
    { id: 5, label: 'Kindness', icon: '🌸' },
    { id: 6, label: 'Ambition', icon: '🚀' },
    { id: 7, label: 'Humor', icon: '😂' },
    { id: 8, label: 'Family', icon: '👨‍👩‍👧‍👦' },
];

const GalleryStyle = ({ sendToParent }) => {
    const [selected, setSelected] = useState([]);

    const toggleValue = (id) => {
        if (selected.includes(id)) {
            setSelected(selected.filter((val) => val !== id));
        } else if (selected.length < 3) {
            setSelected([...selected, id]);
        }
    };

    // ✅ Send updated value to parent whenever `selected` changes
    useEffect(() => {
        if (selected.length > 0) {
            sendToParent(selected);
            console.log("Updated selected values:", selected);
        }
    }, [selected]);


    return (
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">What are your core values?</h2>
            <p className="text-gray-600 mb-6">Choose 3 values to share on your profile.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {values.map(({ id, label, icon }) => (
                    <div
                        key={id}
                        onClick={() => toggleValue(id)}
                        className={`relative p-6 border rounded-xl cursor-pointer transition duration-200 ${selected.includes(id)
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 bg-white hover:bg-gray-50'
                            }`}
                    >
                        <div className="text-3xl mb-2">{icon}</div>
                        <div className="font-medium">{label}</div>

                        {selected.includes(id) && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                                ✓
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 font-semibold text-blue-600">{selected.length}/3 Selected</div>
        </div>
    );
};

export default GalleryStyle;
