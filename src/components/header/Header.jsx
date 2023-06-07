import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { SiMusicbrainz } from 'react-icons/si';

import { GoThreeBars } from 'react-icons/go';


const Header = () => {


    const [ responsiveMenu, setResponsiveMenu ] = useState(false);
    const [myScroll, setMyScrollY] = useState(false)
    


    window.addEventListener("scroll", ()=>{
        setMyScrollY(true)
        if(scrollY==0){
            setMyScrollY(null)
        }
        
    })


    const navActvStyle = ({isActive}) =>{
        return({
            textDecoration: isActive ? 'underline' : 'none'
        })
    }



    return (
        <header className={myScroll ? `z-10 px-5 flex items-center sticky top-0 bg-slate-50 duration-700 shadow-md`: `z-10 px-5 flex sticky top-0 items-center bg-none duration-700`}>
            <div className=' flex justify-between items-center container mx-auto'>
                <div className='flex items-center'>
                    <Link to='/'><SiMusicbrainz className='text-3xl'></SiMusicbrainz></Link>
                    <div className='p-3'>
                        <h1 className='text-3xl font-bold'>Rhythmic</h1>
                        <span className='font-thin text-slate-600'>Motto text</span>
                    </div>
                </div>
                <div className='text-3xl p-1 border  rounded-md md:hidden'>
                    { responsiveMenu ? <MdClose onClick={()=>setResponsiveMenu(!responsiveMenu)}></MdClose> : <GoThreeBars onClick={()=>setResponsiveMenu(!responsiveMenu)}></GoThreeBars> }
                </div>
                <nav className={`text-xl flex flex-col md:block  p-2 ${responsiveMenu ? `absolute right-4 top-20 bg-[#c5c5c5de] rounded-md` : `absolute right-2 -top-48`} md:static md:bg-inherit duration-500`}>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-slate-800 tracking-tight font-semibold active:text-slate-500' to='/'>Home</NavLink>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-slate-800 tracking-tight font-semibold active:text-slate-500' to='/classes'>Classes</NavLink>
                    <NavLink style={navActvStyle} className='px-3 text-xl text-slate-800 tracking-tight font-semibold active:text-slate-500' to='/blog'>Blog</NavLink>
                    
                </nav>
            </div>
        </header>
    );
};

export default Header;