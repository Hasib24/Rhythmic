import axios from 'axios';
import React, { useRef, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import swal from 'sweetalert';

const ManageUsersRow = ({user, index, refetch}) => {
    const roleRef = useRef()

    const [showProceedBtn, setShowProceedBtn] = useState(false)

    const handleShowProceedBtn =(e)=>{
        
        if(e.target.value===user.role){
            setShowProceedBtn(false)
        }else{setShowProceedBtn(true)}
        
    }

    const handleProceedBtn =(email)=>{

        swal({
            title: "Are you sure?",
            text: "You are going to chang the role!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((proceed) => {
            if (proceed) {

                const userData ={
                    email : email,
                    role : roleRef.current.value
                }
                axios.patch('/usersrole', userData)
                .then(response =>{
                    if(response.data.modifiedCount){
                        swal("Success! Role is changed !", {
                          icon: "success",
                        });
                        setShowProceedBtn(false)

                    }
                    
                    
                })
                .catch(err => console.log(err))

            } else {
              swal("The role is not changed !");
            }
          });
        


       
    }

    return (
        <tr className="border-t border-slate-700 hover:bg-base-300 ">
            {/* serial  */}
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowra">
                {index+1}
            </th>
            {/* name  */}
            <td className="px-6 py-4">
                {user.name}
            </td>
            {/* category  */}
            <td className="px-6 py-4">
                {user.email}
            </td>
            {/* role  */}
            <td className="px-6 py-4" colSpan={2}>
                <select defaultValue={user.role} onChange={(e)=>handleShowProceedBtn(e)} ref={roleRef} className="select select-sm">
                    <option value='student'>Student</option>
                    <option value='instractor'>Instructor</option>
                    <option value='admin'>Admin</option>
                </select>

                {showProceedBtn && <button onClick={()=>handleProceedBtn(user.email)} className='btn btn-outline btn-sm btn-accent'>Proceed</button>}    
            </td>
            {/* action  */}
            <td>
                <button  className='active:text-gray-400'>
                    <AiOutlineDelete className='inline'></AiOutlineDelete> Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageUsersRow;