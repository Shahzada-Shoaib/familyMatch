import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pic from '/images/onlineMoney2.jpg';
import Button from './Button';
import { API_BASE_URL } from '../config';

function ApiTesting() {



    const apiCall = async () => {
        const token = 'eyJ1c2VyX2lkIjoiOTEiLCJ0aW1lc3RhbXAiOjE3NTA5MzI5NTN9';
        const profile_id = 91;

        try {
            // Create and populate FormData
            const formData = new FormData();
            formData.append('profile_id', profile_id);

            const response = await axios.post(
                'https://familymatch.aakilarose.com/api/likes',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        // Don't set Content-Type manually — Axios handles it with FormData
                    },
                }
            );

            console.log('API Response:', response.data);
            console.log('Token:', token);
        } catch (error) {
            console.error('Error fetching data:', error.response?.data || error.message);
        }
    };

    return (
        <div>
            <div className="border w-full h-[500px] overflow-hidden">
                <img className="w-full h-full object-cover" src={pic} alt="" />
            </div>

            <Button variant="primary" onClick={apiCall}>
                Hellow
            </Button>

        </div>
    );
}

export default ApiTesting;
