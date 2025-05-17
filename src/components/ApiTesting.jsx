import React from 'react';

function ApiTesting() {
    //its working
    // async function getData() {
    //     try {
    //         const response = await fetch('http://192.168.0.169/familymatch/api/questions', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'x-api-key': '123456' // Change header key & valu
    //             }
    //         });

    //         if (!response.ok) throw new Error('Network error');

    //         const data = await response.json();
    //         console.log("this is data", data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }



    async function getData() {
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '123456' // Change header key & value as needed
                },
                body: JSON.stringify({
                    name: "John Doe",
                    email: "john10@example.com",
                    password: "securepassword",
                    // username: "johndoe"
                })

            });

            if (!response.ok) throw new Error('Network error');

            const data = await response.json();
            console.log("this is data", data);
            console.log("this is data.message", data.message);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    return (
        <div>
            <button
                onClick={getData}
                className="border px-5 py-3 rounded-3xl bg-[#CD185B] font-bold text-white"
            >
                API test
            </button>
        </div>
    );
}

export default ApiTesting;
