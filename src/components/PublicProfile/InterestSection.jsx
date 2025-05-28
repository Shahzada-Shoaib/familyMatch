import React, { useEffect } from 'react';

function InterestSection({data}) {
    const aboutThem = [
        { id: 1, icon: '👤', description: 'Self-growth' },
        { id: 2, icon: '🌍', description: 'Global connections' },
        { id: 3, icon: '💡', description: 'Problem solver' },
        { id: 4, icon: '🎯', description: 'Goal-oriented' },
        { id: 5, icon: '🎨', description: 'Storytelling' },
        { id: 6, icon: '🚀', description: 'Go-getter' },
        { id: 7, icon: '📚', description: 'Lifelong learner' },
        { id: 8, icon: '🤝', description: 'Team player' },
        { id: 9, icon: '🧠', description: 'Critical thinker' },
        { id: 10, icon: '💬', description: 'Clear communicator' }
    ];

    useEffect(() => {
        console.log("Profile Data in InterestSection:", data);
    }
    , [data]);
    return (
        <div className="my-10 px-4 max-w-3xl mx-auto">
            <div className="border-y border-gray-300  py-6 mb-10">
                <p className="text-xl font-semibold mb-4">More</p>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <p>💬</p>
                        <p className="">White/Caucasian</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p>🤝</p>
                        <p className="">Start a Serious Relationship</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Interests</h2>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {data?.interests.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-center items-center gap-3 bg-gray-100 rounded-4xl p-1 shadow-sm hover:shadow-md transition"
                    >
                        <img className='w-4 h-4' src={item.image} alt="" />
                        <p className="text-gray-800">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InterestSection;
