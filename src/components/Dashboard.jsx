import React from 'react';
import { Outlet } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { FaCalendarPlus, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import logo1 from "/logo1.jpg";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          View All Option
        </label>
        <main className="p-4 flex-1">
          <Outlet /> {/* Render nested routes here */}
        </main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <div className='mb-4'>
            <div className='flex flex-row items-center'>
              <img className="h-full w-full" src={logo1} alt="Logo" />
           
            </div>
          </div>
          <hr className="my-4" />
          <li className='font-semibold text-lg'>
            <Link to="/dashboard" className="flex items-center space-x-2">
              <MdDashboard />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className='font-semibold text-lg'>
            <Link to="/dashboard/current" className="flex items-center space-x-2">
              <MdDashboard />
              <span>Current Shift</span>
            </Link>
          </li>
          <li className='font-semibold text-lg'>
            <Link to="/dashboard/users" className="flex items-center space-x-2">
              <FaUsers />
              <span>Manage Miners</span>
            </Link>
          </li>
          <li className='font-semibold text-lg'>
            <Link to="/dashboard/add-miners" className="flex items-center space-x-2">
              <IoAddCircle />
              <span>Add Miners</span>
            </Link>
          </li>
          <li className='font-semibold text-lg'>
            <Link to="/dashboard/schedules" className="flex items-center space-x-2">
            <FaMapMarkerAlt/>
              <span>Map</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
