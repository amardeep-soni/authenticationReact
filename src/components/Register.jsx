import React from 'react'

export default function Register() {
    return (
        <div className='bg-white rounded-lg p-4 w-[480px]'>
            <p className='text-3xl font-bold mb-8'>Register</p>
            <form className='flex flex-col gap-3'>
                <div className='flex gap-4'>
                    <div>
                        <label className='text-xl mb-2'>First Name</label>
                        <input type="email" name="email" className='bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700' required />
                    </div>
                    <div>
                        <label className='text-xl mb-2'>Last Name</label>
                        <input type="email" name="email" className='bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700' required />
                    </div>
                </div>
                <div>
                    <label className='text-xl mb-2'>Email</label>
                    <input type="email" name="email" className='bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700' required />
                </div>
                <div>
                    <label className='text-xl mb-2'>Password</label>
                    <input type="password" name="password" className='bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700' required />
                </div>
                <div>
                    <label className='text-xl mb-2'>Confirm Password</label>
                    <input type="password" name="password" className='bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700' required />
                </div>
                <div>
                    <label className='text-xl mb-2'>Date of Birth</label>
                    <input type="date" name="dob" className='bg-blue-100 p-2 rounded-lg focus-visible:outline-none text-xl w-full text-slate-700' required />
                </div>
                <div>
                    <p className='text-xl'>Gender</p>
                    <input type="radio" name="gender" value="male" className='mr-2' id='male' required />
                    <label className='text-xl mr-4' htmlFor='male'>Male</label>
                    <input type="radio" name="gender" value="female" className='mr-2' id='female' required />
                    <label className='text-xl  mr-4' htmlFor='female'>Female</label>
                    <input type="radio" name="gender" value="other" className='mr-2' id='other' required />
                    <label className='text-xl ' htmlFor='other'>Other</label>
                </div>

                <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-lg w-full text-xl'>Register</button>
                <hr />
                <p className='text-xl text-center'>Already have an account? <a href='/login' className='text-blue-500 hover:underline'>Login</a></p>
            </form>
        </div>
    )
}
