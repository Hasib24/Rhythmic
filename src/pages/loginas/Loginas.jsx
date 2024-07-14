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
        <div className='relative min-h-[100vh] flex justify-center bg-[url("https://images.unsplash.com/photo-1617634795446-b58c985ec639?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover'>
            <div className='mx-3 min-w-[300px] md:mx-auto my-auto p-5 md:px-16 md:py-14 text-slate-100 shadow-2xl rounded-xl  backdrop-blur-3xl border border-slate-500'>
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
                    <button onClick={()=>handleBtnClick("student")} className="my-2 md:mr-4 p-3  md:px-6 md:py-3 rounded-md border tracking-wider active:bg-slate-800 border-slate-500">Student</button>
                    <button onClick={()=>handleBtnClick("instractor")} className="my-2 md:mr-4 p-3  md:px-6 md:py-3 rounded-md border tracking-wider active:bg-slate-800 border-slate-500">Instructor</button>
                    <button onClick={()=>handleBtnClick("admin")} className="my-2         p-3  md:px-6 md:py-3 rounded-md border tracking-wider active:bg-slate-800 border-slate-500">Admin</button>
                </div>
            </div>
        </div>
    )
}
