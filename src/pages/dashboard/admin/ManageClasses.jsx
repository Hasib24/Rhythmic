import React from 'react';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';
import { useQuery } from 'react-query';
import { useContext } from 'react';
import { AuthContex } from '../../../providers/AuthProvider';
import axios from 'axios';
import ManageClassesRow from './ManageClassesRow';
import useTitle from '../../../hooks/useTitle';

const ManageClasses = () => {
    useTitle('Manage classes')
    const {user} = useContext(AuthContex)


       // tenStack query to load all classes 
       const { isLoading, isError, refetch, data : classesArray = [], error } = useQuery({
        queryKey : ['allclasses', user?.userEmail],
        queryFn : async () =>{
            const response = await axios.get(`/admin/manage-classes?email=${user.userEmail}`)
            return response.data
        }
    })

    // console.log(classesArray);

    return (
        <section className='px-5'>
            <SectionHeader>Manage Classes</SectionHeader>
            <div>
                {classesArray?.map((aClass, index)=><ManageClassesRow aClass={aClass} index={index} key={index} refetch={refetch} ></ManageClassesRow>)}
            </div>
        </section>
    );
};

export default ManageClasses;