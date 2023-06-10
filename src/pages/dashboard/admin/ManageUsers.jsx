import React, { useContext, useEffect, useState } from 'react';
import ManageUsersRow from './ManageUsersRow';
import axios from 'axios';
import { AuthContex } from '../../../providers/AuthProvider';

const ManageUsers = () => {
    const {user} = useContext(AuthContex)
    const [ allUsers, setAllUsers ] = useState([])

    useEffect(()=>{
        axios.get(`/users?email=${user.email}`)
        .then(response =>setAllUsers(response.data))
        .catch(error => console.log(error.response))

    },[])



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
                    {allUsers.map((user, index, arry) =><ManageUsersRow user={user} key={index} index={index}></ManageUsersRow>)}

                </tbody>
            </table>
        </div>

    </section>
    );
};

export default ManageUsers;