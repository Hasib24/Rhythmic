import React from 'react';

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
                
                feedback
            </td>
            {/* status  */}
            <td className="px-6 py-4">
                
                {aClass.approveStatus}
            </td>
            {/* action  */}
            <td>
                action
            </td>
        </tr>
    );
};

export default MyClassesRow;