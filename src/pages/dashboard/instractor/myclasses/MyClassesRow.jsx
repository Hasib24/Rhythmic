import React from 'react';
import { AiFillAlert } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { MdOutlineDoNotDisturb } from 'react-icons/md';
import { LuLoader } from 'react-icons/lu';


const MyClassesRow = ({aClass, index}) => {


    return (
        <tr className="border-t border-slate-700 hover:bg-base-300 ">
            {/* serial  */}
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowra">
                {index + 1}
            </th>
            {/* name  */}
            <td className="px-6 py-4">
                {aClass.className}
            </td>
            {/* seats  */}
            <td className="px-6 py-4">
                {aClass.totalSeat}
            </td>
            {/* enrolls  */}
            <td className="px-6 py-4">
                
                {aClass.enrolls}
            </td>
            {/* feedback  */}
            <td className="px-6 py-4">
               <span><AiFillAlert className='inline mr-2'></AiFillAlert>no feedback </span> 
                
            </td>
            {/* status  */}
            <td className="px-6 py-4">
                {
                    aClass.approveStatus==='denyed' ? <span> <MdOutlineDoNotDisturb className='mr-2 inline text-red-600'></MdOutlineDoNotDisturb>{aClass.approveStatus} </span> : <span>{aClass.approveStatus==='panding' ? <LuLoader className='mr-2 inline'></LuLoader> : <MdDone className='mr-2 inline text-green-600'></MdDone> }{aClass.approveStatus}</span>
                }
                
                
            </td>
            {/* action  */}
            <td>
                action
            </td>
        </tr>
    );
};

export default MyClassesRow;