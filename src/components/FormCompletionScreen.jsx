import React, { useEffect } from 'react'
import hand from '/icons/hand_icon.png'; 
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../utils/authToken';



function FormCompletionScreen({ answers }) {

    const navigate = useNavigate();


    function normalizeUserData(data) {
        const normalized = {};

        for (const key in data) {
            if (Array.isArray(data[key])) {
                // Convert arrays to comma-separated strings
                normalized[key] = data[key].join(',');
            } else {
                normalized[key] = data[key];
            }
        }

        return normalized;
    }

    const normalizedData = normalizeUserData(answers);

    // console.log("normal data", normalizedData);



    const handleSubmit = async (e) => {
        // const token = localStorage.getItem('authToken');
        const token = getAuthToken();
        e.preventDefault();

        fetch('api/update-profile', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(normalizedData),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log('Response:', result);
                // Navigate manually after successful response
                navigate('/profilepage');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

  return (
    <div className='text-center flex flex-col items-center justify-center'>
          <img className='w-72 h-72' src={hand} alt="" />
          <p className='text-3xl font-bold text-[#AE2456] my-8'>And Just Like that you're Ready</p>
          <p className='text-[#3D3D3D] leading-4 mb-14'>Before you start discovering other members, let’s help you get the most out of your FamilyMatch experience.</p>
              <button
                  className='px-20 py-3 border-2 rounded-4xl text-white bg-[#AE2456]'
                  onClick={handleSubmit}
              >
                  Continue
              </button>           
    </div>
  )
}

export default FormCompletionScreen;