import React, { useState } from 'react';
import SectionHeader from '../../../../components/sectionHeader/SectionHeader';
import MySelectedClassesCard from './MySelectedClassesCard';
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContex } from '../../../../providers/AuthProvider';

const MySelectedClasses = () => {
    const [mySelectedClses, setMySelectedClses] = useState([])
    const {user} = useContext(AuthContex)
    useEffect(()=>{
        axios.get(`/user?email=${user?.email}`)
        .then(response => setMySelectedClses(response.data.selectedSlass))
        .catch(error =>console.log(error))
    },[])
    return (
        <section className='container mx-auto'>
            <SectionHeader>My Selections</SectionHeader>
            <div className='grid md:grid-cols-2 gap-3'>
                {
                    mySelectedClses.map(selectedClass =><MySelectedClassesCard selectedClass={selectedClass}></MySelectedClassesCard>)
                }
            </div>
        </section>
    );
};

export default MySelectedClasses;