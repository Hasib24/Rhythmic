import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";

// import { FaBeer } from 'react-icons/fa';
import { TbLayoutSidebarRightCollapse } from 'react-icons/tb';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { AuthContex } from '../providers/AuthProvider';

const DashboardLayout = () => {

    const { user, role } = useContext(AuthContex);

    return (
        <section>
            <Header></Header>
            <div className="drawer lg:drawer-open">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

              <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn w-16  drawer-button lg:hidden"> <TbLayoutSidebarRightCollapse className='text-3xl'></TbLayoutSidebarRightCollapse> </label>
                <Outlet></Outlet>

              </div> 

              <div className="drawer-side h-[85vh] border">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="flex justify-end menu p-4 w-80 h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  
                  {/* students route  */}
                  {role ==='student' ? <>
                    <li><NavLink to='myselectedclasses'>My Selecttions</NavLink></li>
                    <li><NavLink to='myenrolledclasses'>My Enrolls</NavLink></li>
                  </>:<></>}
                  
                  {/* Instructor route  */}
                  {role==='instractor' ? <>
                    <li><NavLink to='addclass'>Add Class</NavLink></li>
                    <li><NavLink to='myclasses'>My Classes</NavLink></li>
                    <li><NavLink to='enrolledstudents'>Enrolded Students</NavLink></li>
                    <li><NavLink to='Feedback'>Feedback Hub</NavLink></li>
                  
                  </>: <></>}

                  {/* Admin route */}
                  { role ==='admin' ? <>
                  <li><NavLink to='manageclasses'>Manage Classes</NavLink></li>
                  <li><NavLink to='manageusers'>Mamage Users</NavLink></li>
                  </> : <></>}
                  
                

                  <div className="divider"></div> 
                  <li><NavLink to='dashboard'>Dashboard Home</NavLink></li>
                  <li><NavLink to='notice'>Notice</NavLink></li>
                  <li><NavLink to='notes'>Take a Note</NavLink></li>
                  <li><NavLink to='help'>Help</NavLink></li>

                  
                </ul>

              </div>
            </div>
            <Footer></Footer>
        </section>


    );
};

export default DashboardLayout;