import React from 'react';
import axios from 'axios';


function ApiTesting() {


    // async function getData() {
    //     try {
    //         const response = await fetch('/api/search', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'X-API-KEY': '123456' // Change header key & value as needed
    //             },
    //             body: JSON.stringify({
    //                 email: "raheel@test.com",
    //                 password: "12345",
    //                 // username: "johndoe"
    //             })

    //         });

    //         if (!response.ok) throw new Error('Network error');

    //         const data = await response.json();
    //         console.log("this is data", data);
    //         console.log("this is data.message", data.message);

    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }


    // function getData2() {
    //     axios.get('/api/search', {
    //         headers: {
    //             'X-API-KEY': '123456'
    //         }
    //     })
    //         .then(response => {
    //             console.log('Data:', response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // }

        function getData2() {
            const params = {
                key1: 'value1',
                key2: 'value2',
                // add more key-value pairs as needed
            };

            axios.get('/api/search', {
                headers: {
                    'X-API-KEY': '123456'
                },
                body: params // axios will convert this object to query string automatically
            })
                .then(response => {
                    console.log('Data:', response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }


    return (
        <div>
            <button
                onClick={getData2}
                className="border px-5 py-3 rounded-3xl bg-[#CD185B] font-bold text-white"
            >
                API test
            </button>
        </div>
    );
}

export default ApiTesting;
