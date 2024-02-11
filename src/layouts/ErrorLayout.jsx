import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import useTitle from '../hooks/useTitle';

const ErrorLayout = () => {
    useTitle("404 Error")
    return (
        <section className='container mx-auto'>
            <div className='flex justify-center'><img className=' h-[50vh] rounded-xl w-auto object-cover' src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=740&t=st=1684527006~exp=1684527606~hmac=5232955252e97be88c3032838becd9426b17367f2d53f14eae7331e2f03d3a0d" alt="" /></div>
            <div className='text-center '>
                <h1 className='tracking-wider text-2xl md:text-6xl m-4 my-10'>Error has been occurred!</h1>
                <Link to={'/'} className='border py-2 px-5 text-xl items-center rounded-md bg-blue-600 text-white border-blue-600 hover:bg-white hover:text-slate-800 duration-500'><button><HiHome className='inline' /> Back to Home</button></Link>
            </div>
        </section>
    );
};

export default ErrorLayout;