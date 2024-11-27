import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
        date_of_birth: '',
        gender: '',
        username: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [fieldErrors, setFieldErrors] = useState({}); // Store field-specific errors

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const registerForm = async (e) => {
        e.preventDefault();

        // Validate that password and confirm password match
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        // Reset error and success messages before submission
        setErrorMessage('');
        setSuccessMessage('');
        setFieldErrors({}); // Reset field errors

        try {
            const apiUrl = 'http://127.0.0.1:8000/api/register/';
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };

            const response = await fetch(apiUrl, requestOptions);

            // Check if the response is OK (status code 2xx)
            if (!response.ok) {
                const errorData = await response.json();

                // If backend returns specific validation errors
                if (!errorData.message) {
                    setFieldErrors(errorData); // Set field-specific errors
                } else if (errorData.message) {
                    setErrorMessage(errorData.message); // General message error
                } else {
                    // For other unexpected errors
                    setErrorMessage('Something went wrong on the server. Please try again later.');
                }
                return;
            }

            // If the registration is successful
            setSuccessMessage('Registration successful!');
            navigate('/login'); // Redirect to login page after successful registration
            
        } catch (error) {
            // Handle fetch or network error
            setErrorMessage('An error occurred while submitting the form. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className='bg-white rounded-lg p-4 w-[480px]'>
            <p className='text-3xl font-bold mb-8'>Register</p>
            <form className='flex flex-col gap-3' onSubmit={registerForm}>
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

                <div className='flex gap-4'>
                    <div>
                        <label className='text-xl mb-2'>First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            className={`bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700 ${fieldErrors.first_name ? 'border-2 border-red-500' : ''}`}
                            required
                        />
                        {fieldErrors.first_name && <p className="text-red-500 text-sm">{fieldErrors.first_name[0]}</p>}
                    </div>
                    <div>
                        <label className='text-xl mb-2'>Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            className={`bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700 ${fieldErrors.last_name ? 'border-2 border-red-500' : ''}`}
                            required
                        />
                        {fieldErrors.last_name && <p className="text-red-500 text-sm">{fieldErrors.last_name[0]}</p>}
                    </div>
                </div>
                <div>
                    <label className='text-xl mb-2'>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700 ${fieldErrors.email ? 'border-2 border-red-500' : ''}`}
                        required
                    />
                    {fieldErrors.email && <p className="text-red-500 text-sm">{fieldErrors.email[0]}</p>}
                </div>
                <div>
                    <label className='text-xl mb-2'>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className={`bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700 ${fieldErrors.username ? 'border-2 border-red-500' : ''}`}
                        required
                    />
                    {fieldErrors.username && <p className="text-red-500 text-sm">{fieldErrors.username[0]}</p>}
                </div>
                <div>
                    <label className='text-xl mb-2'>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700 ${fieldErrors.password ? 'border-2 border-red-500' : ''}`}
                        required
                    />
                    {fieldErrors.password && <p className="text-red-500 text-sm">{fieldErrors.password[0]}</p>}
                </div>
                <div>
                    <label className='text-xl mb-2'>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700 ${fieldErrors.confirmPassword ? 'border-2 border-red-500' : ''}`}
                        required
                    />
                    {fieldErrors.confirmPassword && <p className="text-red-500 text-sm">{fieldErrors.confirmPassword[0]}</p>}
                </div>
                <div>
                    <label className='text-xl mb-2'>Date of Birth</label>
                    <input
                        type="date"
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleInputChange}
                        className={`bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700 ${fieldErrors.date_of_birth ? 'border-2 border-red-500' : ''}`}
                        required
                    />
                    {fieldErrors.date_of_birth && <p className="text-red-500 text-sm">{fieldErrors.date_of_birth[0]}</p>}
                </div>
                <div>
                    <p className='text-xl'>Gender</p>
                    <input
                        type="radio"
                        name="gender"
                        value="M"
                        id='male'
                        checked={formData.gender === 'M'}
                        onChange={handleInputChange}
                        className='mr-2'
                        required
                    />
                    <label className='text-xl mr-4' htmlFor='male'>Male</label>
                    <input
                        type="radio"
                        name="gender"
                        value="F"
                        id='female'
                        checked={formData.gender === 'F'}
                        onChange={handleInputChange}
                        className='mr-2'
                        required
                    />
                    <label className='text-xl mr-4' htmlFor='female'>Female</label>
                    <input
                        type="radio"
                        name="gender"
                        value="O"
                        id='other'
                        checked={formData.gender === 'O'}
                        onChange={handleInputChange}
                        className='mr-2'
                        required
                    />
                    <label className='text-xl' htmlFor='other'>Other</label>
                </div>

                <button
                    type="submit"
                    className='bg-blue-500 text-white px-4 py-2 rounded-lg w-full text-xl'
                >
                    Register
                </button>
                <hr />
                <p className='text-xl text-center'>Already have an account? <a href='/login' className='text-blue-500 hover:underline'>Login</a></p>
            </form>
        </div>
    );
}
