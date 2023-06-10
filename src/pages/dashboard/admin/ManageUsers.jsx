import React from 'react';
import ManageUsersRow from './ManageUsersRow';

const ManageUsers = () => {
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
                    <ManageUsersRow></ManageUsersRow>
                    <ManageUsersRow></ManageUsersRow>
                    <ManageUsersRow></ManageUsersRow>
                    <ManageUsersRow></ManageUsersRow>
                    <ManageUsersRow></ManageUsersRow>
                    <ManageUsersRow></ManageUsersRow>
                </tbody>
            </table>
        </div>

    </section>
    );
};

export default ManageUsers;