import React, { useState } from 'react';

function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        console.log("this is formData", formData);

        try {
            const response = await fetch('http://192.168.0.169/familymatch/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: 'Signup successful!' });
                setFormData({ name: '', email: '', password: '' });
            } else {
                setMessage({ type: 'error', text: result.message || 'Signup failed.' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" bg-[url('/images/coupleImage.jpg')] bg-cover min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center"><span className='text-bold text-4xl'>Family</span>Match</h2>

                {message && (
                    <div
                        className={`mb-4 text-sm px-4 py-2 rounded ${message.type === 'success'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                    >
                        {message.text}
                    </div>
                )}

                <div className="mb-4">
                    <div className='gap-4'>
                        <p className='text-4xl font-bold'>Sign in</p>
                        <div className='flex gap-3 my-6'>
                            <p className='font-bold'>Not a Member?</p>
                            <a className='text-blue-500' href="/signup">Join</a>
                        </div>
                    </div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                {/* <div className='my-2'>
                    <p>
                        Already have an account?
                        <a href="/login" class="text-blue-600 hover:underline"> Sign in</a>
                    </p>
                </div> */}


                <button
                    type="submit"
                    className="w-full bg-[#CD185B] text-white font-semibold py-2 px-4 rounded-4xl hover:bg-[#E32069] transition duration-200"
                    disabled={loading}
                >
                    {loading ? 'Signing in...' : 'Sign In'}
                </button>
            </form>
        </div>
    );
}

export default SignupForm;
