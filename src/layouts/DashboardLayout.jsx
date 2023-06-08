import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import {FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const DashboardLayout = () => {
    return (
        <section>
            <Header></Header>
            <div className="drawer lg:drawer-open">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

              <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn w-10 drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

              </div> 

              <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li><a>Sidebar Item 1</a></li>
                  <li><a>Sidebar Item 2</a></li>
                </ul>

              </div>
            </div>
            <Footer></Footer>
        </section>


    );
};

export default DashboardLayout;