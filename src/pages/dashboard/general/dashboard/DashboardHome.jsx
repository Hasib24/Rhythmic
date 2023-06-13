import React from 'react';
import SectionHeader from '../../../../components/sectionHeader/SectionHeader';
import { useContext } from 'react';
import { AuthContex } from '../../../../providers/AuthProvider';
import useTitle from '../../../../hooks/useTitle';

const DashboardHome = () => {
    const {user} = useContext(AuthContex)
    useTitle('Dashboard Home')
    return (
        <section>
            <SectionHeader>Welcome to Dashboard</SectionHeader>
            <div className='flex justify-center my-10'>
                <div className='flex flex-col items-center w-[50vh] p-5 rounded-lg bg-base-200 border-2 shadow-lg border-base-300  '>
                    <img className='rounded-full w-1/3' src={user.photoURL} alt="" />
                    <h1 className='text-xl'>{user.displayName}</h1>
                    <h1 className='text-xl'>{user.email}</h1>
                </div>
            </div>
        </section>
    )
        
};

export default DashboardHome;