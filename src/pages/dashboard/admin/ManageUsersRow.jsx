import axios from 'axios';
import React, { useRef, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import swal from 'sweetalert';

const ManageUsersRow = ({ user, index, refetch }) => {
    const roleRef = useRef()
    const [loading, setLoading] = useState(false)

    const handleRoleChange = (e) => {
        setLoading(true)
        setTimeout(() => {
            swal({
                title: "Are you sure?",
                text: "You are going to chang the role!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((proceed) => {
                    if (proceed) {

                        const userData = {
                            userEmail: user.userEmail,
                            role: roleRef.current.value
                        }

                        axios.patch('/admin/update-user-role', userData)
                            .then(response => {
                                if (response.data.modifiedCount) {
                                    swal("Success! Role is changed !", {
                                        icon: "success",
                                    });
                                    setLoading(false)
                                    refetch()
                                }
                            })
                            .catch(err => {
                                setLoading(false)
                                console.log(err)
                            })

                    } else {
                        setLoading(false)
                        roleRef.current.value = user.role
                    }
                });
        }, 1000);
    }


    return (
        <tr className="border-t border-slate-700 hover:bg-base-300 ">
            {/* serial  */}
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowra">
                {index + 1}
            </th>
            {/* name  */}
            <td className="px-6 py-4">
                {user.userName}
            </td>
            {/* category  */}
            <td className="px-6 py-4">
                {user.userEmail}
            </td>
            {/* role  */}
            <td className="px-6 py-4" colSpan={2}>
                <select defaultValue={user.role} onChange={(e) => handleRoleChange(e)} ref={roleRef} className="select select-sm">
                    <option value='Student'>Student</option>
                    <option value='Instractor'>Instructor</option>
                    <option value='Admin'>Admin</option>
                </select>

                <span className={`loading loading-spinner loading-sm opacity-0 ml-3 ${loading && 'opacity-80'}`}></span>
            </td>
            {/* action  */}
            <td>
                <button className='active:text-gray-400'>
                    <AiOutlineDelete className='inline'></AiOutlineDelete> Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageUsersRow;