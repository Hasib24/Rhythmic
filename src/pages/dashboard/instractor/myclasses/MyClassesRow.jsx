import React from 'react';

const MyClassesRow = () => {
    return (
        <tr className="border-t border-slate-700 hover:bg-base-300 ">
            {/* serial  */}
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowra">
                1
            </th>
            {/* name  */}
            <td className="px-6 py-4">
                class name
            </td>
            {/* seats  */}
            <td className="px-6 py-4">
                400
            </td>
            {/* enrolls  */}
            <td className="px-6 py-4">
                
                200
            </td>
            {/* feedback  */}
            <td className="px-6 py-4">
                
                feedback
            </td>
            {/* status  */}
            <td className="px-6 py-4">
                
                panding
            </td>
            {/* action  */}
            <td>
                action
            </td>
        </tr>
    );
};

export default MyClassesRow;