import React from 'react';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';
import { useQuery } from 'react-query';
import { useContext } from 'react';
import { AuthContex } from '../../../providers/AuthProvider';
import axios from 'axios';
import ManageClassesRow from './ManageClassesRow';

const ManageClasses = () => {
    const {user} = useContext(AuthContex)


       // tenStack query to load all classes 
       const { isLoading, isError, refetch, data : classesArray = [], error } = useQuery({
        queryKey : ['allclasses', user?.email],
        queryFn : async () =>{
            const response = await axios.get(`/allclasses?email=${user.email}`)
            return response.data
        }
    })

    // console.log(classesArray);

    return (
        <section className='px-5'>
            <SectionHeader>Manage Classes</SectionHeader>
            <div>
                {classesArray?.map((aClass, index)=><ManageClassesRow aClass={aClass} index={index} key={index} ></ManageClassesRow>)}
            </div>
        </section>
    );
};

export default ManageClasses;