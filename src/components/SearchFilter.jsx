import React, { useState } from 'react';
import img from '/images/heartRibbon.avif'
import {
    FaMapMarkerAlt,
    FaUser,
    FaHeart,
    FaSearch,
    FaBook,
    FaPray,
    FaMusic
} from 'react-icons/fa';

const SearchFilter = () => {
    const [filters, setFilters] = useState({
        gender: '',
        location: '',
        ageRange: [22, 35],
        goal: '',
        hobbies: '',
        religion: '',
        education: '',
    });

    const updateFilter = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleSearch = () => {
        console.log('Searching with filters:', filters);
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="backdrop-blur-md rounded-2xl p-8 shadow-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
                >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Gender */}
                    <FilterCard label="Gender" icon={<FaUser />}>
                        <select
                            className="w-full border p-2 rounded-md"
                            value={filters.gender}
                            onChange={(e) => updateFilter('gender', e.target.value)}
                        >
                            <option value="">Any</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="nonbinary">Non-binary</option>
                        </select>
                    </FilterCard>

                    {/* Location */}
                    <FilterCard label="Location" icon={<FaMapMarkerAlt />}>
                        <input
                            type="text"
                            placeholder="e.g. New York"
                            className="w-full border p-2 rounded-md"
                            value={filters.location}
                            onChange={(e) => updateFilter('location', e.target.value)}
                        />
                    </FilterCard>

                    {/* Age Range */}
                    <FilterCard label="Age Range">
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                value={filters.ageRange[0]}
                                min={18}
                                max={filters.ageRange[1]}
                                onChange={(e) =>
                                    updateFilter('ageRange', [parseInt(e.target.value), filters.ageRange[1]])
                                }
                                className="w-full border p-2 rounded-md"
                            />
                            <span>–</span>
                            <input
                                type="number"
                                value={filters.ageRange[1]}
                                min={filters.ageRange[0]}
                                max={99}
                                onChange={(e) =>
                                    updateFilter('ageRange', [filters.ageRange[0], parseInt(e.target.value)])
                                }
                                className="w-full border p-2 rounded-md"
                            />
                        </div>
                    </FilterCard>

                   

                    {/* Hobbies */}
                    <FilterCard label="Hobbies" icon={<FaMusic />}>
                        <input
                            type="text"
                            placeholder="e.g. Music, Hiking"
                            className="w-full border p-2 rounded-md"
                            value={filters.hobbies}
                            onChange={(e) => updateFilter('hobbies', e.target.value)}
                        />
                    </FilterCard>

                    {/* Religion */}
                    <FilterCard label="Religion" icon={<FaPray />}>
                        <input
                            type="text"
                            placeholder="e.g. Christian, Muslim"
                            className="w-full border p-2 rounded-md"
                            value={filters.religion}
                            onChange={(e) => updateFilter('religion', e.target.value)}
                        />
                    </FilterCard>

                    {/* Education */}
                    <FilterCard label="Education" icon={<FaBook />}>
                        <select
                            className="w-full border p-2 rounded-md"
                            value={filters.education}
                            onChange={(e) => updateFilter('education', e.target.value)}
                        >
                            <option value="">Any</option>
                            <option value="highschool">High School</option>
                            <option value="bachelors">Bachelor's</option>
                            <option value="masters">Master's</option>
                            <option value="phd">PhD</option>
                        </select>
                    </FilterCard>

                    {/* Goal */}
                    <FilterCard label="Looking For" icon={<FaHeart />}>
                        <div className="flex flex-wrap gap-2  w-80">
                            {['Friendship', 'Casual', 'Serious'].map((goal) => (
                                <button
                                    key={goal}
                                    onClick={() => updateFilter('goal', goal)}
                                    className={`px-4 py-2 rounded-full drop-shadow-[0_4px_6px_#AE2456] ${filters.goal === goal
                                        ? 'bg-[#AE2456] text-white'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                >
                                    {goal}
                                </button>
                            ))}
                        </div>
                    </FilterCard>
                </div>

                {/* Search Button */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={handleSearch}
                        className="bg-[#9334EB] hover:bg-[#AE2456] text-white px-6 py-2 rounded-3xl flex items-center gap-2 shadow-md"
                    >
                        <FaSearch /> Search
                    </button>
                    {/* <img src={img} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

const FilterCard = ({ label, icon, children }) => (
    <div>
        <label className="text-sm font-semibold flex items-center gap-2 mb-2 text-[#AE2456]">
            {icon} {label}
        </label>
        {children}
    </div>
);

export default SearchFilter;
