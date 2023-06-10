import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const ManageUsersRow = () => {
    const [showProceedBtn, setShowProceedBtn] = useState(false)
    return (
        <tr className=" border-b border-t border-slate-700 hover:bg-base-300 ">
            {/* serial  */}
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowra">
                ere
            </th>
            {/* name  */}
            <td className="px-6 py-4">
                Abdul hamid
            </td>
            {/* category  */}
            <td className="px-6 py-4">
                ab@gmail.com
            </td>
            {/* role  */}
            <td className="px-6 py-4" colSpan={2}>
                <select onChange={()=>setShowProceedBtn(true)} className="select select-bordered select-sm">
                    <option selected>Student</option>
                    <option>Instructor</option>
                    <option>Admin</option>
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