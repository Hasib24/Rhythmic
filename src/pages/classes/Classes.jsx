import React from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import ClassCard from './ClassCard';
import axios from 'axios';
import { useQuery } from 'react-query';

const Classes = () => {

    // tenStack query to load all classes 
    const { isLoading, isError, refetch, data : classesArray = [], error } = useQuery({
        queryKey : ['allapprovedclasses'],
        queryFn : async () =>{
            const response = await axios.get(`/allapprovedclasses`)
            return response.data
        }
    })

    console.log(classesArray);

    return (
        <section className='container mx-auto'>
            <SectionHeader>All Classes</SectionHeader>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 py-10'>
                {
                    classesArray.map((aClass, index)=><ClassCard key={index} aClass={aClass}></ClassCard>)
                }
               
            </div>
        </section>
    );
};

export default Classes;