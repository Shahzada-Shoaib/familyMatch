import React, { useState } from 'react';

const questions = [
    { id: 1, question: 'What is your name?' },
    { id: 2, question: 'How old are you?' },
    { id: 3, question: 'What is your favorite color?' },
    // {id : 4, question: 'What is your favorite food?' },
];

const ProfileForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});

    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(prev => prev + 1);
            console.log("set current step", currentStep);
            console.log("set current step", setCurrentStep);
            console.log("this is answers", answers);
            console.log("this is setAnswers", setAnswers);
            console.log("button clicked");

        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleChange = (e) => {
        setAnswers({ ...answers, [questions[currentStep].id]: e.target.value });
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
            <div className="relative overflow-hidden h-40">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentStep * 100}%)` }}
                >
                    {questions.map((q) => (
                        <div key={q.id} className="w-full flex-shrink-0 px-4">
                            <label className="block text-lg font-medium mb-2">{q.question}</label>
                            <input
                                type="text"
                                value={answers[q.id] || ''}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 flex justify-between">
                <button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
                >
                    Previous
                </button>   
                <button
                    onClick={handleNext}
                    disabled={currentStep === questions.length - 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProfileForm;





// import React from 'react'
// import { useState } from 'react';

// function ProfileForm() {
//     const questions = [
//         { id: 1, question: 'What is your name?' },
//         { id: 2, question: 'How old are you?' },
//         { id: 3, question: 'What is your favorite color?' },
//         // {id : 4, question: 'What is your favorite food?' },
//     ];
//     const a = "this is a test";



//     //test
//     const [firstName, setFirstName] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = () => {
//         if (firstName.trim() === '') {
//             setError('First Name is required');
//         } else {
//             setError('');
//             alert(`Hello, ${firstName}!`); // or console.log(firstName)
//         }
//     };
//     //test
//   return (
//       <div
//           className="w-full  h-[100vh] flex justify-center items-center"
//           style={{
//               background: "linear-gradient(9deg, rgba(250, 233, 239, 0.97) 0%, rgba(247, 248, 250, 1) 100%)"
//             // background: "linear-gradient(50deg, rgba(237, 254, 255, 0.97) 0%, rgba(174, 36, 86, 1) 100%)"
//           }}
//       >
//           <div className='flex justify-center items-center '>
//             <div className=''>
//                 <p className='text-2xl font-bold text-black'>Family Match</p>
//                 <h1 className='text-5xl font-bold text-[#AE2456] mb-12'>{a}</h1>
                  
    
//     <input
//                   placeholder='First Name'
//                       className='mb-1 border-b-3 border-[#AE2456] pt-6 w-full focus:outline-none'
//                   type='text'
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//               />
//                  {error && <p className='text-red-500 mb-4'>{error}</p>}

//                 <div className='flex justify-end  mt-14'>

//                   <button
//                       className={`bg-[#AE2456] text-white py-2 px-8 rounded-3xl ${firstName.trim() === "" ? "opacity-50 cursor-not-allowed" : ""}`}
//                       onClick={handleSubmit}
//                       disabled={firstName.trim() === ''}
//                   >
//                       Enter
//                   </button>
//                 </div>
//             </div>
//           </div>
//       </div>


//   )
// }

// export default ProfileForm;




// design

// import React from 'react'
// import { useState } from 'react';

// function ProfileForm() {



//     //test
//     const [firstName, setFirstName] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = () => {
//         if (firstName.trim() === '') {
//             setError('First Name is required');
//         } else {
//             setError('');
//             alert(`Hello, ${firstName}!`); // or console.log(firstName)
//         }
//     };
//     //test
//   return (
//       <div
//           className="w-full  h-[100vh] flex justify-center items-center"
//           style={{
//               background: "linear-gradient(9deg, rgba(250, 233, 239, 0.97) 0%, rgba(247, 248, 250, 1) 100%)"
//           }}
//       >
//           <div className='flex justify-center items-center '>
//             <div className=''>
//                 <p className='text-2xl font-bold text-black'>Family Match</p>
//                 <h1 className='text-5xl font-bold text-[#AE2456] mb-12'>What's Your First Name</h1>


//     <input
//                   placeholder='First Name'
//                       className='mb-1 border-b-3 border-[#AE2456] pt-6 w-full focus:outline-none'
//                   type='text'
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//               />
//                  {error && <p className='text-red-500 mb-4'>{error}</p>}

//                 <div className='flex justify-end  mt-14'>

//                   <button
//                       className={`bg-[#AE2456] text-white py-2 px-8 rounded-3xl ${firstName.trim() === "" ? "opacity-50 cursor-not-allowed" : ""}`}
//                       onClick={handleSubmit}
//                       disabled={firstName.trim() === ''}
//                   >
//                       Enter
//                   </button>
//                 </div>
//             </div>
//           </div>
//       </div>


//   )
// }

// export default ProfileForm;