import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        const username = localStorage.getItem('username');

        // Check if the access token exists
        if (!accessToken) {
            navigate('/login'); // Redirect to login if no access token
            return;
        }

        const verifyToken = async (token) => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/token/verify/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token: token }),
                });

                if (response.ok) {
                    setIsAuthenticated(true);
                    setUsername(username);
                } else {
                    // If access token is invalid, try using the refresh token to get a new one
                    if (refreshToken) {
                        const refreshResponse = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ refresh: refreshToken }),
                        });

                        if (refreshResponse.ok) {
                            const refreshData = await refreshResponse.json();
                            localStorage.setItem('accessToken', refreshData.access);
                            setIsAuthenticated(true);
                            setUsername(username);
                        } else {
                            navigate('/login'); // Redirect to login if refresh token fails
                        }
                    } else {
                        navigate('/login'); // Redirect to login if no refresh token
                    }
                }
            } catch (error) {
                console.error('Error verifying token:', error);
                navigate('/login');
            }
        };

        verifyToken(accessToken);
    }, [navigate]);

    const handleLogout = async () => {
        const refreshToken = localStorage.getItem('refreshToken');

        const response = await fetch('http://127.0.0.1:8000/api/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh: refreshToken }),
        });
        if (response.OK) {
            console.log('logout');
            
        }else{

            console.log('no logout');
        }
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/login');
    };

    return (
        <div className='text-center'>
            {isAuthenticated ? (
                <>
                    <p className='text-3xl text-white mb-4'>
                        <span className='text-6xl text-orange-500'>Hi {username},</span> You are authenticated
                    </p>
                    <button onClick={handleLogout} className='text-white bg-red-500 px-4 py-2 rounded-md'>Logout</button>
                </>
            ) : (
                <p className='text-3xl text-red-500'>Authentication failed. Please log in.</p>
            )}
        </div>
    );
}
