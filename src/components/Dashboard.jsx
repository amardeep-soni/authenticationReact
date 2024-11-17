import React from 'react'

export default function Dashboard() {
    return (
        <div className='text-center'>
            <p className='text-3xl text-white mb-4'>
                <span className='text-6xl text-orange-500'>Hi,</span> You are authenticated</p>
            <button className='text-white bg-red-500 px-4 py-2 rounded-md'>Logout</button>
        </div>
    )
}
