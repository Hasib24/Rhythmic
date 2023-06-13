import React, { useContext, useEffect, useState } from 'react';
import ManageUsersRow from './ManageUsersRow';
import axios from 'axios';
import { AuthContex } from '../../../providers/AuthProvider';
import { useQuery } from 'react-query'
import useTitle from '../../../hooks/useTitle';

const ManageUsers = () => {
    useTitle('Manage users')
    const {user} = useContext(AuthContex)
   

    const { isLoading, isError, refetch, data : usersArray = [], error } = useQuery({
        queryKey : ['user', user?.email],
        queryFn : async () =>{
            const response = await axios.get(`/users?email=${user.email}`)
            return response
        }
    })
    // console.log(isError);






    return (
        <section className='md:px-5'>
        <div className="container mx-auto my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left bg-base-200">
                <thead className="text-xs  uppercase ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Serial
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            email
                        </th>
                        
                        <th scope="col" className="px-6 py-3 "  colSpan='2'>
                            role
                        </th>
                        <th scope='col'>action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {/* // table data  */}
                    {usersArray?.data?.map((user, index, arry) =><ManageUsersRow user={user} key={index} index={index} refetch={refetch}></ManageUsersRow>)}

                </tbody>
            </table>
        </div>

    </section>
    );
};

export default ManageUsers;