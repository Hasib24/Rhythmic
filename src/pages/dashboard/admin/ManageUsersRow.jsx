import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const ManageUsersRow = ({user, index}) => {

    const [showProceedBtn, setShowProceedBtn] = useState(false)

    const handleShowProceedBtn =(e)=>{
        
        if(e.target.value===user.role){
            setShowProceedBtn(false)
        }else{setShowProceedBtn(true)}
        
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
                <select defaultValue={user.role} onChange={(e)=>handleShowProceedBtn(e)} className="select select-sm">
                    <option value=''>Student</option>
                    <option value='instructor'>Instructor</option>
                    <option value='admin'>Admin</option>
                </select>

                {showProceedBtn && <button className='btn btn-outline btn-sm btn-accent'>Proceed</button>}    
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