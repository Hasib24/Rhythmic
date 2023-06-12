import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";

import { BsClipboard2Pulse, BsPersonCheck } from 'react-icons/bs';
import { MdOutlineControlPointDuplicate, MdHelp, MdPeopleOutline, MdManageAccounts } from 'react-icons/md';
import { GiNotebook } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { VscFeedback } from 'react-icons/vsc';
import { BiSelectMultiple, BiBook } from 'react-icons/bi';
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

              <div className="drawer-side h-[85vh]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="flex justify-end menu p-4 w-80 h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  
                  {/* students route  */}
                  {role ==='student' ? <>
                    <li><NavLink to='myselectedclasses'><BiSelectMultiple className='text-xl'></BiSelectMultiple>  My Selecttions</NavLink></li>
                    <li><NavLink to='myenrolledclasses'><MdOutlineControlPointDuplicate className='text-xl'></MdOutlineControlPointDuplicate> My Enrolls</NavLink></li>
                  </>:<></>}
                  
                  {/* Instructor route  */}
                  {role==='instractor' ? <>
                    <li><NavLink to='addclass'><MdOutlineControlPointDuplicate className='text-xl'></MdOutlineControlPointDuplicate> Add Class</NavLink></li>
                    <li><NavLink to='myclasses'><BsPersonCheck className='text-xl'></BsPersonCheck> My Classes</NavLink></li>
                    <li><NavLink to='enrolledstudents'><MdPeopleOutline className='text-xl'></MdPeopleOutline> Enrolded Students</NavLink></li>
                    <li><NavLink to='Feedback'><VscFeedback className='text-xl'></VscFeedback> Feedback Hub</NavLink></li>
                  
                  </>: <></>}

                  {/* Admin route */}
                  { role ==='admin' ? <>
                  <li><NavLink to='manageclasses'><BiBook className='text-xl'></BiBook> Manage Classes</NavLink></li>
                  <li><NavLink to='manageusers'><MdManageAccounts className='text-xl'></MdManageAccounts> Mamage Users</NavLink></li>
                  </> : <></>}
                  
                

                  <div className="divider"></div> 
                  <li><NavLink to='dashboard'><FaHome className='text-xl'></FaHome> Dashboard Home</NavLink></li>
                  <li><NavLink to='notice'><BsClipboard2Pulse className='text-xl'></BsClipboard2Pulse> Notice</NavLink></li>
                  <li><NavLink to='notes'><GiNotebook className='text-xl'></GiNotebook> Take a Note</NavLink></li>
                  <li><NavLink to='help'><MdHelp className='text-xl'></MdHelp> Help</NavLink></li>

                  
                </ul>

              </div>
            </div>
            <Footer></Footer>
        </section>


    );
};

export default DashboardLayout;