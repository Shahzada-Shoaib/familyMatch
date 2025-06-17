import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pic from '/images/onlineMoney2.jpg'
import {API_BASE_URL} from '/src/config'
import Button from './Button';


function ApiTesting() {

    const [apiData, setApiData] = useState(null);


    const normalizeWithABC = (data) => {
        const ABCKeys = ['allergy', 'blood_groups'];
        const result = { ABC: {} };

        for (const key in data) {
            const cleaned = data[key].map(({ id, name }) => ({ id, name }));

            if (ABCKeys.includes(key)) {
                result.ABC[key] = cleaned;
            } else {
                result[key] = cleaned;
            }
        }

        return result;
    };

    // const normalized = normalizeWithABC(response.data.data);
    // const normalized = normalizeWithABC(apiResponse.data);
    const normalized = normalizeWithABC(apiData);


    // response.data.data
    console.log("normal in apitesting", normalized);




    // useEffect(()=>{
    //     console.log("api data", apiData);
    // }, [apiData])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://familymatch.aakilarose.com/api/profile_options', {
                    headers: {
                        'X-API-KEY': '123456'
                    }
                });

                console.log('Dataddsds:', response.data.data);
                console.log('Blood Groups:', response.data.data.blood_groups);

                setApiData(response.data.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData(); // call the async function
    }, []);


    function abc() {
        console.log("abc function called");
    }
    return (
        <div>
    
            <div className="border w-full h-[500px] overflow-hidden">
                <img className="w-full h-full object-cover" src={pic} alt="" />
            </div>

    

                <Button variant="primary"  onClick={abc}>
                    Hellow
                </Button>   
            <div className="p-6 space-y-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                {/* <Button variant="danger" icon={FaTrash}>Delete</Button> */}
                <Button variant="cancel">Cancel</Button>
                {/* <Button icon={FaPlus}>Add</Button> */}
                <Button isLoading>Loading...</Button>
            </div>

        </div>
    );
}

export default ApiTesting;
