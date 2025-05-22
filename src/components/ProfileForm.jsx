import React, { useState, useEffect } from 'react';
import ImageUploader from './ImageUploader';
import GalleryStyle from './GalleryStyle';
import TestComponent from './TestComponent';
import FormCompletionScreen from './FormCompletionScreen';

// const questions = [
//     { id: 1, apiname:"number0", question: "Hi, Let's get started. When's your Birthday?0",input: 'text' },
//     { id: 2, apiname: "number1", question: "What's your first name?1", input: 'text' },
//     { id: 3, apiname: "number2", question: "Almost done. What's your email?2", input: 'text' },
//     { id: 4, apiname: "number3", question: "Now let's get you set up with a password.3", input: 'text' },
//     { id: 5, apiname: "number4", question: "How did you hear about FamilyMatch?4", input: 'text' },
//     { id: 6, apiname: "number5", question: "How would you describe your body type?5", input: 'text' },
//     { id: 7, apiname: "number6", question: "Have you ever been married?6", input: 'text' },
//     { id: 8, apiname: "number7", question: "Do you have kids?7", input: 'text' },
//     { id: 9, apiname: "number8", question: 'Do you want kids?8', input: 'text' },
//     { id: 10, apiname: "number9", question: "Which ethnicity best describe you?9", input: 'text' },
//     { id: 11, apiname: "number10", question: "What interests you?10", input: 'text' },
//     { id: 12, apiname: "number11", question: "Add a topic to your profile.11", input: 'text' },
//     { id: 13, apiname: "number12", question: "Add a topic to your profile.12", input: 'text' },
//     { id: 14, apiname: "number13", question: "Add a topic to your profile.13", input: 'file' },
//     { id: 15, apiname: "number14", question: "Add a topic to your profile.14", input: 'text' },
//     { id: 16, apiname: "number15", question: "Add a topic to your profile.15", input: 'text' },
//     { id: 17, apiname: "number16", question: "Add a topic to your profile.16", input: 'text' },
// ];

const questions = [
    //signup data
    { id: 1, apiname: "number0", question: "Hi, Let's get started. When's your Birthday?0", input: 'date' },
    { id: 2, apiname: "number1", question: "What's your Full name?1", input: 'text' },
    { id: 3, apiname: "number2", question: "Almost done. What's your email?2", input: 'text' },
    { id: 4, apiname: "number3", question: "Now let's get you set up with a password.3", input: 'text' },
    //yhn tk signup ho k token aa jae ga
    { id: 5, apiname: "number4", question: "How did you hear about FamilyMatch?4", input: 'text' },
    { id: 6, apiname: "number5", question: "What's your religion?5", input: 'text' },
    { id: 7, apiname: "number6", question: "How would you describe your body type?6", input: 'text' },
    //suervy started
    { id: 8, apiname: "number7", question: "Have you ever been married?7", input: 'text' },
    { id: 9, apiname: "number8", question: "Do you have kids?8", input: 'text' },
    { id: 10, apiname: "number9", question: 'Do you want kids?9', input: 'text' },
    //yhn survey khtm ab blue screeb nthen get profile detail
    { id: 11, apiname: "number10", question: "Which ethnicity best describe you?10", input: 'text' },
    { id: 12, apiname: "number11", question: "What interests you?11", input: 'text' },
    { id: 13, apiname: "number12", question: "Add a topic to your profile.12", input: 'text' },
    { id: 14, apiname: "number13", question: "Ready to catch someone’s eye?13 👀", input: 'text' },
    { id: 15, apiname: "number14", question: "What are your core values?14", input: 'text' },
    { id: 16, apiname: "number15", question: "", input: 'text'},
];




const ProfileForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [ApiData, setApiData] = useState([]);
    //test
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(prev => prev + 1);
            console.log("this is in next handle",answers);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
            console.log("this is in prev handle", answers);

        }
    };

    const handleChange = (e) => {
        setAnswers({ ...answers, [questions[currentStep].apiname]: e.target.value });
        console.log("this is in handleChange", answers);
    };

    const handleFinish = async () => {
        console.log("this is in finish handle", answers);
        handleNext();

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '123456' // Change header key & value as needed
                },
                body: JSON.stringify(answers)
                // body: JSON.stringify({
                //     name: "John Doe",
                //     email: "john10@example.com",
                //     password: "securepassword",
                //     // username: "johndoe"
                // })
            });

            if (!response.ok) throw new Error('Network error');

            const data = await response.json();
            console.log("this is data", data);
            console.log("this is data.message", data.message);
            console.log("this is data.token", data.token);

            // Store the token in localStorage here:
            localStorage.setItem('authToken', data.token);
            console.log("Token stored in localStorage");
            // if (data.token) {
            //     localStorage.setItem('authToken', data.token);
            //     console.log("Token stored in localStorage");
            // }


        } catch (error) {
            console.error('Error fetching data:', error);
        };
        
    };


    //test
    const receiveFromChild = (data) => {
        console.log("Received from child:", data);
        setAnswers({ ...answers, [questions[currentStep].apiname]: data });
    };



    const buttonQuestions = [
        // Basic numbers
        { id: 1, name: "One" },
        { id: 2, name: "Two" },
        { id: 3, name: "Three" },
        { id: 4, name: "Four" },
        { id: 5, name: "Five" },
        { id: 6, name: "Six" },
        { id: 7, name: "Seven" },
        { id: 8, name: "Eight" },
        { id: 9, name: "Nine" },
        { id: 10, name: "Ten" },
        // // Repeated/compound names
        { id: 11, name: "Two Two Two" },
        { id: 12, name: "Three Three Three" },
        { id: 13, name: "Eleven Eleven" },
        { id: 14, name: "Twelve Twelve Twelve" },
        { id: 15, name: "Thirteen Thirteen" },
        { id: 16, name: "Fifteen Fifteen" },
    ];


    

    const singleSelectQuestions = [
        [{ id: 1, name: "Option 1-A" }, { id: 2, name: "Option 1-B" }],     // For step 4
        [{ id: 3, name: "Option 2-A" }, { id: 4, name: "Option 2-B" }],     // For step 5
        [{ id: 5, name: "Option 3-A" }, { id: 6, name: "Option 3-B" }],     // For step 6
        [{ id: 7, name: "Option 4-A" }, { id: 8, name: "Option 4-B" }]      // For step 7
    ];



    useEffect(() => {
        fetch('/api/options', {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '123456',
            }
        })
            .then(res => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(data => {
                console.log("Fetched data:", data);
                setApiData(data);
            })
            .catch(err => {
                console.error("Fetch error:", err);
            });
    }, []);

    useEffect(() => {
        console.log("ApiData changed:", ApiData?.data?.[6]);
    }, [ApiData]);

    //test
    const handleOptionClick = (q, questions, currentStep, answers, setAnswers, setSelectedOptions) => {
        const { apiname } = questions[currentStep];
        const currentAnswers = answers[apiname] || [];

        const isAlreadySelected = currentAnswers.includes(q.id);
        const updatedAnswers = isAlreadySelected
            ? currentAnswers.filter((item) => item !== q.id)
            : [...currentAnswers, q.id];

        const newAnswers = {
            ...answers,
            [apiname]: updatedAnswers,
        };

        console.log("Updated Answers Object:", newAnswers);
        console.log("Current Question's Selected Options:", updatedAnswers);

        setAnswers(newAnswers);
        setSelectedOptions(updatedAnswers);
    };



    return (

        <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6"
            style={{
                background: "linear-gradient(9deg, rgba(250, 233, 239, 0.97) 0%, rgba(247, 248, 250, 1) 100%)"
            }}
        >
            <div className="w-full max-w-full sm:max-w-[480px] md:max-w-[600px]">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentStep * 100}%)` }}
                    >
                        {questions.map((q) => (
                            <div key={q.id} className=" w-full flex-shrink-0 px-2 sm:px-4"
                                >
                                <p className="text-xl sm:text-2xl font-bold text-black">FamilyMatch</p>

                                <label className="block text-3xl sm:text-5xl font-bold text-[#AE2456] mb-8 sm:mb-12">{q.question}</label>
                               
                                {currentStep >= 9 && currentStep <= 9 ? (
                                    <h1 className='text-[#AE2456] font-bold text-2xl mb-2'>Food and Drinks</h1>
                                ) : ( null)
                                }

                                {
                                    //Single Select OPtions
                                    currentStep >= 4 && currentStep <= 9 ? (
                                        ApiData.data[currentStep - 4]?.map((q) => (
                                            <span key={q.id} className={currentStep === 4 ? 'flex justify-center' : ''}>
                                                <button
                                                    className={`text-[#AE2456] border m-2 py-2 px-6 rounded-3xl w-full sm:w-auto 
                                             ${answers[questions[currentStep].apiname] === q.id ? 'bg-[#AE2456] text-white' : ''}
                                             `}
                                                    onClick={() => {
                                                        setAnswers({ ...answers, [questions[currentStep].apiname]: q.id });
                                                        setTimeout(() => {
                                                            handleNext();
                                                        }, 1000); // delay in milliseconds (2000 ms = 2 seconds)

                                                    }}
                                                >
                                                    {q.name}
                                                </button>
                                            </span>
                                        ))
                                    )
                                        :    
                                        currentStep === 10 ? (
                                       // Multiple select Answers buttons   
                                            ApiData?.data?.[5].map((q) => (
                                                    <button
                                                        key={q.id}
                                                        className={` text-black border m-2 py-2 px-6 rounded-3xl sm:w-auto
                                                    ${(answers[questions[currentStep].apiname] || []).includes(q.id)
                                                                ? 'bg-black text-white'
                                                                : ''
                                                            }
                                                    `}
                                                        onClick={() => handleOptionClick(q, questions, currentStep, answers, setAnswers, setSelectedOptions)}   
                                                    >
                                                        {q.name}
                                                    </button>
                                            ))
                                        ) : currentStep === 11 ? (
                                                ApiData?.data?.[6].map((q) => (
                                                    <button
                                                        key={q.id}
                                                        className={`text-black border m-2 py-2 px-6 rounded-3xl sm:w-auto
                                                    ${(answers[questions[currentStep].apiname] || []).includes(q.id)
                                                                ? 'bg-black text-white'
                                                                : ''
                                                            }
                                                    `}
                                                        onClick={() => handleOptionClick(q, questions, currentStep, answers, setAnswers, setSelectedOptions)}
                                                    >
                                                        <div className='flex items-center gap-1'>
                                                            <img src={q.image} alt="" className='w-3 h-3 mr-2' />
                                                            <span>  {q.name} </span>
                                                        </div>
                                                    </button>
                                                ))
                                        ) 
                                        //Tesxt area input field
                                        : currentStep === 12 ? (
                                            <div className=''>
                                                <p className='text-[#AE2456] font-bold mb-2'>Example</p>
                                                <textarea
                                                    value={answers[q.apiname] || ''}
                                                    onChange={handleChange}
                                                    className="border w-full rounded-lg p-4"
                                                    rows={4}  // You can adjust number of visible lines here
                                                    placeholder="What's your vibe? Drop a topic!"
                                                />

                                                    <div className=' text-center mt-4'>
                                                        <button className='px-20 py-3 border-2 rounded-4xl text-white bg-[#AE2456]'
                                                            onClick={handleNext} >Continue</button>
                                                    </div>
                                                </div>
                                            ) : currentStep === 13 ? (
                                            // File upload input field
                                                <div>

                                                        <ImageUploader onButtonClick={handleNext} />

                                                    </div>   
                                                ) : currentStep === 14 ? (
                                                    <GalleryStyle sendToParent={receiveFromChild} handleNextFucntion={handleNext} />
                                                ) : currentStep === 15 ? (
                                                    <FormCompletionScreen answers={answers} />
                                                ) : (
                                            // Text input field
                                                            <div>
                                                                <input
                                                                    type={q.input}
                                                                    value={answers[q.apiname] || ''}
                                                                    onChange={handleChange}
                                                                    className="mb-1 border-b-2 border-[#AE2456] pt-4 sm:pt-6 w-full focus:outline-none text-base sm:text-lg"
                                                                />
                                                                <p className='text-[#444444] text-xs'>You can type your answer here</p>
                                                            </div>

                                                        )
                                }
                            </div>
                        ))}
                        

                    </div>
                </div>


                {!(currentStep >= 4 && currentStep <= 15) && (
                    <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">

                        {currentStep !== 0 && (
                            <button
                                onClick={handlePrev}
                                className="bg-[#AE2456] text-white py-2 px-6 rounded-3xl w-full sm:w-auto"
                            >
                                Previous
                            </button>
                        )}

                        {currentStep === 3 ? (
                            <button
                                onClick={handleFinish}
                                className="bg-green-600 text-white py-2 px-6 rounded-3xl w-full sm:w-auto"
                            >
                                Finish
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="bg-[#AE2456] text-white py-2 px-6 rounded-3xl w-full sm:w-auto"
                            >
                                Next
                            </button>
                        )}

                    </div>
                )}


                {currentStep >= 8 && currentStep <= 11 ? ( 
                    <div>
                        <div className=' text-center'>
                            <button className='px-20 py-3 border-2 rounded-4xl text-white bg-[#AE2456]'
                            onClick={handleNext} >Continue</button>
                        </div>
                    </div>
                ) : null
                    
                 }

            </div>
        </div>




    );
};

export default ProfileForm;