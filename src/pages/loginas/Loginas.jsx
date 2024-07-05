import React from 'react'
import { SiMusicbrainz } from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom'


export default function Loginas() {
    const navigate = useNavigate()
    const handleBtnClick = (payload) => {
        if(payload=="student"){
            localStorage.setItem("User role", "Student")
            navigate("/login")
        }else if(payload=="instractor"){
            localStorage.setItem("User role", "Instractor")
            navigate("/login")
        }else{
            localStorage.setItem("User role", "Admin")
            navigate("/login")
        }
    }

    return (
        <div className='relative min-h-[100vh] flex justify-center bg-[url("https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg")] bg-cover'>
            <div className='mx-3 min-w-[300px] md:mx-auto my-auto p-5 md:px-16 md:py-14 text-slate-100 shadow-2xl rounded-xl  backdrop-blur-sm border'>
                <div className='relative flex items-center'>
                    <div className=''>
                        <Link to='/'>
                            <h1 className='text-2xl font-bold'>Rhythmic</h1> </Link>
                        <span className='font-thin'>Unlesh your inner rhythm</span>
                    </div>
                    <div className='absolute right-0'>
                        <Link to='/'><SiMusicbrainz className='text-4xl'></SiMusicbrainz></Link>
                    </div>
                </div>
                <h2 className='my-5 text-2xl font-light tracking-widest '>Login as :</h2>
                <div className='flex flex-col md:flex-row font-semibold'>
                    <button onClick={()=>handleBtnClick("student")} className="my-2 md:mr-4 p-3  md:px-6 md:py-3 rounded-md border tracking-wider active:bg-slate-800">Student</button>
                    <button onClick={()=>handleBtnClick("instractor")} className="my-2 md:mr-4 p-3  md:px-6 md:py-3 rounded-md border tracking-wider active:bg-slate-800">Instructor</button>
                    <button onClick={()=>handleBtnClick("admin")} className="my-2         p-3  md:px-6 md:py-3 rounded-md border tracking-wider active:bg-slate-800">Admin</button>
                </div>
            </div>
        </div>
    )
}
