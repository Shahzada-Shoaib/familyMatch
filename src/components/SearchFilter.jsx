import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import img from '/images/heartRibbon.avif';
import useFetch from '../components/hooks/useFetch';
import {
    FaUser,
    FaHeart,
    FaSearch,
    FaBook,
    FaPray,
    FaMusic
} from 'react-icons/fa';
import { API_KEY } from '../config';
import axios from 'axios';

const SearchFilter = forwardRef(({ searchResultData, clearProfileData, }, ref) => {
    const [filters, setFilters] = useState({
        gender: '',
        location: '',
        min_age: '',
        max_age: '',
        goal: '',
        marital_status: '',
        religion_id: '',
        qualification: '',
        page: 1,
        per_page: 5,
        sort: 'asc'
    });
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [isSearched, setIsSearched] = useState(false);

    const { data, loading, error } = useFetch('/api/search', {
        headers: {
            'X-API-KEY': '123456',
        },
    });

    console.log('useFetch data:', data?.data);



    const updateFilter = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    function handleSearch(overrides = {}) {
        //reset page into 1 for new search so the results would be from page 1 again
        const params = { ...filters, page:1, ...overrides };

        if (overrides.triggeredByButton) {
            console.log("🔘 Search button was clicked!");
            clearProfileData();
            // overrides.page = 1; // Reset to first page on new search
        }
        setLoadingSearch(true);

        axios.get('/api/results', {
            headers: {
                'X-API-KEY': API_KEY
            },
            params,
        })
            .then(response => {
                searchResultData(response.data);
                console.log("searchResultData is this", response.data);
                setIsSearched(true);
                setFilters(params); // update filters to latest params used in search
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                setLoadingSearch(false);
                console.log('Loading state set to false');
            });
    }



    // Updated handleLoadMore to pass the new page param directly to handleSearch
        const handleLoadMore = () => {
            const nextPage = filters.page + 1;
            handleSearch({ page: nextPage });
            console.log("ref forward worked");
        };

    // Expose handleLoadMore to parent via ref
    useImperativeHandle(ref, () => ({
        handleLoadMore,
    }));

   

    return (
        <div
            className={`transition-all duration-500 h-[650px] top-10 md:mx-12 mt-6 
                ${isSearched ? 'md:w-[35%] md:h-[650px]' : 'w-full h-auto'} border `}
            // style={{
            //     width: isSearched ? '35%' : '100%',
            //     height: isSearched ? '650px' : 'auto',
            // }}
        >
            <div
                className={`backdrop-blur-md rounded-2xl shadow-2xl bg-cover bg-center transition-all duration-500`}
                style={{
                    backgroundImage: `url(${img})`,
                    padding: '2rem',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: isSearched ? 'column' : 'row',
                    flexWrap: isSearched ? 'nowrap' : 'wrap',
                    gap: '1.5rem',
                }}
            >
                {/* Filter Cards */}
                <FilterCard label="Gender" icon={<FaUser />}>
                    <select
                        className="w-full border p-2 rounded-md"
                        value={filters.gender}
                        onChange={(e) => updateFilter('gender', e.target.value)}
                    >
                        <option value="">Any</option>
                        {data?.data?.genders?.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </option>
                        ))}
                    </select>
                </FilterCard>

                <FilterCard label="Age Range">
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={filters.min_age}
                            min={13}
                            placeholder='min age'
                            max={filters.max_age}
                            onChange={(e) => updateFilter('min_age', e.target.value)}
                            className="w-full border p-2 rounded-md"
                        />
                        <span>–</span>
                        <input
                            type="number"
                            value={filters.max_age}
                            placeholder='max age'
                            min={13}
                            onChange={(e) => updateFilter('max_age', e.target.value)}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>
                </FilterCard>

                <FilterCard label="Marital Status" icon={<FaMusic />}>
                    <select
                        className="w-full border p-2 rounded-md"
                        value={filters.marital_status}
                        onChange={(e) => updateFilter('marital_status', e.target.value)}
                    >
                        <option value="">Any</option>
                        {data?.data?.marital_status?.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </option>
                        ))}
                    </select>
                </FilterCard>

                <FilterCard label="Religion" icon={<FaPray />}>
                    <select
                        className="w-full border p-2 rounded-md"
                        value={filters.religion_id}
                        onChange={(e) => updateFilter('religion_id', e.target.value)}
                    >
                        <option value="">Any</option>
                        {data?.data?.religions?.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </option>
                        ))}
                    </select>
                </FilterCard>

                <FilterCard label="Qualification" icon={<FaBook />}>
                    <select
                        className="w-full border p-2 rounded-md"
                        value={filters.qualification}
                        onChange={(e) => updateFilter('qualification', e.target.value)}
                    >
                        <option value="">Any</option>
                        <option value="highschool">High School</option>
                        <option value="bachelors">Bachelor's</option>
                        <option value="masters">Master's</option>
                        <option value="phd">PhD</option>
                    </select>
                </FilterCard>

                <FilterCard label="Looking For" icon={<FaHeart />}>
                    <div className="flex flex-wrap gap-2">
                        {['Friendship', 'Casual', 'Serious'].map((goal) => (
                            <button
                                key={goal}
                                onClick={() => updateFilter('goal', goal)}
                                className={`px-4 py-2 rounded-full drop-shadow-md ${filters.goal === goal
                                    ? 'bg-[#AE2456] text-white'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                {goal}
                            </button>
                        ))}
                    </div>
                </FilterCard>

                <div className="w-full flex justify-end mt-6">
                    {loadingSearch ? (
                        <div className="flex items-center gap-2">
                            <span className="loader"></span>
                            <p className='text-gray-500'>Searching...</p>
                        </div>
                    ) : (
                        <button
                                onClick={() => handleSearch({ triggeredByButton: true })}
                                className="bg-[#9334EB] hover:bg-[#AE2456] text-white px-6 py-2 rounded-3xl flex items-center gap-2 shadow-md"
                            >
                                <FaSearch /> Search
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
});

const FilterCard = ({ label, icon, children }) => (
    <div className="min-w-[180px]">
        <label className="text-sm font-semibold flex items-center gap-2 mb-2 text-[#AE2456]">
            {icon} {label}
        </label>
        {children}
    </div>
);

export default SearchFilter;
