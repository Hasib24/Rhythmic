import React from 'react';
import MyClassesRow from './MyClassesRow';

const MyClasses = () => {
    return (
        <section className='md:px-5'>
            <div className="container mx-auto my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left bg-base-200">
                    <thead className="text-xs  uppercase ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sn
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Class Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Seats
                            </th>

                            <th scope="col" className="px-6 py-3 " >
                                Enrolls
                            </th>

                            <th scope="col" className="px-6 py-3 " >
                                Feedback
                            </th>

                            <th scope="col" className="px-6 py-3 " >
                                status
                            </th>
                            <th scope='col'>action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <MyClassesRow></MyClassesRow>
                        <MyClassesRow></MyClassesRow>
                        <MyClassesRow></MyClassesRow>
                        <MyClassesRow></MyClassesRow>
                        <MyClassesRow></MyClassesRow>
                        <MyClassesRow></MyClassesRow>
                        <MyClassesRow></MyClassesRow>
                        <MyClassesRow></MyClassesRow>
                        {/* {usersArray?.data?.map((user, index, arry) =><ManageUsersRow user={user} key={index} index={index} refetch={refetch}></ManageUsersRow>)} */}

                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default MyClasses;