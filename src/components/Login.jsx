import React from 'react'

export default function Login() {
    return (
        <div className='bg-white rounded-lg p-4 w-[480px]'>
            <p className='text-3xl font-bold mb-8'>Login</p>
            <form className='flex flex-col gap-3'>
                <div>
                    <label className='text-xl mb-2'>Email</label>
                    <input type="email" name="email" className='bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700' required />
                </div>
                <div>
                    <label className='text-xl mb-2'>Password</label>
                    <input type="password" name="password" className='bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700' required />
                </div>

                <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-lg w-full text-xl'>Login</button>
                <hr />
                <p className='text-center text-xl'>Don't have an account? <a href='/register' className='text-blue-500 hover:underline'>Register</a></p>
            </form>
        </div>
    )
}
