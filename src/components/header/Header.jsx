import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { SiMusicbrainz } from 'react-icons/si';
import { GoThreeBars } from 'react-icons/go';
import { AuthContex } from '../../providers/AuthProvider';


const Header = () => {
    const navigate = useNavigate()
    const [profileMenu, setProfileMenu] = useState(false);
    const { user, setUser, logOut } = useContext(AuthContex)
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const hadleThemeToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const handleLogOut = () => {
        localStorage.removeItem('jwtAccessToken')
        logOut()
            .then(() => {
                setUser(null)
                navigate('/')
            }).catch((error) => {
                console.log(error.message);
            });
    }


    const [responsiveMenu, setResponsiveMenu] = useState(false);
    const [myScroll, setMyScrollY] = useState(false)



    window.addEventListener("scroll", () => {
        setMyScrollY(true)
        if (scrollY == 0) {
            setMyScrollY(null)
        }

    })


    const navActvStyle = ({ isActive }) => {
        return ({
            textDecoration: isActive ? 'underline' : 'none'
        })
    }



    return (
        <header className={myScroll ? `z-10 px-5 flex items-center sticky top-0 bg-base-300 duration-700 shadow-md` : `z-10 px-5 flex sticky top-0 items-center bg-none duration-700`}>
            <div className=' flex justify-between items-center container mx-auto'>
                <div className='flex items-center'>
                    <Link to='/'><SiMusicbrainz className='text-4xl'></SiMusicbrainz></Link>
                    <div className='p-3'>
                        <h1 className='text-2xl font-bold'>Rhythmic</h1>
                        <span className='font-thin text-slate-600'>Unlesh your inner rhythm</span>
                    </div>
                </div>
                <div className='text-3xl p-1 rounded-md md:hidden'>
                    {responsiveMenu ? <MdClose onClick={() => setResponsiveMenu(!responsiveMenu)}></MdClose> : <GoThreeBars onClick={() => setResponsiveMenu(!responsiveMenu)}></GoThreeBars>}
                </div>
                <nav className={`text-xl flex flex-col justify-between items-center md:block py-6 ${responsiveMenu ? `absolute right-4 top-20  rounded-md` : `absolute right-2 -top-48`} md:static md:bg-inherit duration-500`}>
                    <NavLink style={navActvStyle} className='px-3 text-xl tracking-tight font-semibold active:text-slate-500' to='/'>Home</NavLink>
                    <NavLink style={navActvStyle} className='px-3 text-xl tracking-tight font-semibold active:text-slate-500' to='/classes'>Classes</NavLink>
                    <NavLink style={navActvStyle} className='px-3 text-xl tracking-tight font-semibold active:text-slate-500' to='/instractors'>Instractors</NavLink>
                    {
                        user ? <>
                            <NavLink style={navActvStyle} className='px-3 text-xl tracking-tight font-semibold active:text-slate-500' to='/dashboard/dashboard'>Dashboard</NavLink>

                            <div className='inline'>
                                <img className='w-10 border-2 border-slate-500 cursor-pointer rounded-full  inline' src={user.profileImageURL} alt="Photo" onClick={() => setProfileMenu(!profileMenu)} />

                            </div>
                            <div className={profileMenu ? `absolute top-30 right-0 bg-base-300 shadow-md p-5 rounded-md border-2 border-slate-400 w-[200px]` : `absolute -top-60 right-0 p-5 rounded-md`}>
                                <h1>{user.userName}</h1>
                                <div>
                                    <label className="inline-flex swap swap-rotate">
                                        {/* this hidden checkbox controls the state */} Theme
                                        <input className='inline ml-3' type="checkbox" onChange={hadleThemeToggle} />

                                        {/* sun icon */}
                                        <svg className="swap-on fill-current" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                        {/* moon icon */}
                                        <svg className="swap-off fill-current" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                    </label>
                                </div>
                                <button onClick={handleLogOut}>Logout</button>
                            </div>
                        </> : <>
                            <NavLink style={navActvStyle} className='px-3 text-xl tracking-tight font-semibold active:text-slate-500' to='/loginas'>Login</NavLink>
                        </>
                    }





                </nav>
            </div>
        </header>
    );
};

export default Header;