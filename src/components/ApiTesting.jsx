import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pic from '/images/onlineMoney2.jpg';
import Button from './Button';
import { API_BASE_URL } from '../config';

function ApiTesting() {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('Enter key was pressed!');
            // Add your logic here
        }
    };

    const [apiData, setApiData] = useState({
        name: 'Shoaib shoaib',
        dob: '01-01-2001',
        relation: 'son'
    });

    const token = 'eyJ1c2VyX2lkIjoiOTEiLCJ0aW1lc3RhbXAiOjE3NTA0MDAyOTl9';

    useEffect(() => {
        console.log("api data", apiData);
    }, [apiData]);

    const fetchData = async () => {
        try {
            // 1. Create FormData and append fields
            const formData = new FormData();
            for (const key in apiData) {
                formData.append(key, apiData[key]);
            }

            // 2. Post with formData
            const response = await axios.post(
                'https://familymatch.aakilarose.com/api/childern/add',
                formData,
                {
                    headers: {
                        'X-API-KEY': '123456',
                        'Authorization': `Bearer ${token}`
                        // Do NOT set Content-Type manually — let Axios handle it
                    }
                }
            );

            console.log('Response:', response.data);
            setApiData(response.data);
        } catch (error) {
            if (error.response) {
                console.error('API error:', error.response.status, error.response.data);
            } else {
                console.error('Network error:', error.message);
            }
        }
    };

    return (
        <div>
            <div className="border w-full h-[500px] overflow-hidden">
                <img className="w-full h-full object-cover" src={pic} alt="" />
            </div>

            <Button variant="primary" onClick={fetchData}>
                Hellow
            </Button>
            <input
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Type something and press Enter"
            />
        </div>
    );
}

export default ApiTesting;
