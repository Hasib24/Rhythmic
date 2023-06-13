import React from 'react';
import SectionHeader from '../../../../components/sectionHeader/SectionHeader';
import { BiSupport } from 'react-icons/bi';
import { MdAddCall } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import useTitle from '../../../../hooks/useTitle';

const Help = () => {
    useTitle('Help')
    return (
        <section>
            <SectionHeader>Help Desk</SectionHeader>
            <div>
                <div className='flex justify-center text-7xl'>
                    <BiSupport ></BiSupport>24/7
                </div>
                <div className='my-10'>
                    <h1 className='text-center text-3xl'><MdAddCall className='inline mr-2'></MdAddCall>Hot Line : 8809-324XXXXXXX</h1>
                    <h1 className='text-center text-3xl'><TfiEmail className='inline mr-2'></TfiEmail>Hot Email : suppor@email.com</h1>
                </div>

            </div>
        </section>
    );
};

export default Help;