import React from 'react'
import Register from './Register'
import Login from './Login'

export default function Body() {
    return (
        <div className='min-h-screen bg-slate-800 flex justify-center items-center'>
            {/* <Register /> */}
            <Login />
        </div>
    )
}
