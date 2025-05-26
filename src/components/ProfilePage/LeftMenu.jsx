import React, { useState } from 'react';

function LeftMenu() {
    const [selectedId, setSelectedId] = useState(null);

    const options = [
        { id: 1, label: "About me" },
        { id: 2, label: "Projects" },
        { id: 3, label: "Skills" },
        { id: 4, label: "People Who liked" },
        { id: 5, label: "Your likes" },
        { id: 6, label: "settings" }

    ];

    return (
        <div className=' w-full max-w-full md:max-w-[25vw] px-4 md:ms-14 bg-white flex flex-col justify-start rounded-xl overflow-x-hidden box-border'>
            {options.map((option) => {
                const isActive = selectedId === option.id;

                return (
                    <div key={option.id} className=''>
                        <button
                            onClick={() => setSelectedId(option.id)}
                            className={` rounded-lg w-full my-2 py-3 px-4 gap-2 flex items-center transition-colors duration-200
                ${isActive ? 'bg-[#FEE7F5] text-pink-600' : 'bg-[#F2F5F6] text-black'}`}
                        >
                            <div className='flex items-center'>
                                <p
                                    className={`w-3 h-3 rounded-full border-2 mr-2
                    ${isActive ? 'bg-pink-500 border-pink-600' : 'border-gray-400'}`}
                                ></p>
                            </div>
                            <p className='text-sm md:text-base text-gray-500'>{option.label}</p>
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default LeftMenu;
