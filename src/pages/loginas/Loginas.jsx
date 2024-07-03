import React from 'react'


export default function Loginas() {
    return (
        <div className='relative min-h-[100vh] flex justify-center bg-[url("https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg")] bg-cover'>
            <div className='mx-auto my-auto px-16 py-14 text-slate-100 shadow-2xl rounded-xl  backdrop-blur-sm '>
                <h2 className='text-center text-2xl font-semibold tracking-widest '>Login as</h2>
                <div className='flex justify-center mt-10 font-semibold'>
                    <button className="mx-3 px-6 py-3 rounded-md border">Student</button>
                    <button className="mx-3 px-6 py-3 rounded-md border">Instructor</button>
                    <button className="mx-3 px-6 py-3 rounded-md border">Admin</button>
                </div>
            </div>
        </div>
    )
}
