import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import logo1 from "/logo1.jpg";

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer
  const navigate = useNavigate();

  // Handle drawer close when an item is clicked
  const handleLinkClick = (path) => {
    navigate(path);
    if (window.innerWidth < 1024) {
      document.getElementById("my-drawer-2").checked = false; // Close drawer on small screens
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Button to open drawer on small screens */}
        <label 
          htmlFor="my-drawer-2" 
          className="btn btn-primary drawer-button lg:hidden"
        >
          View All Options
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
          
          {/* Links with onClick to handle drawer close */}
          <li className='font-semibold text-lg'>
            <button 
              onClick={() => handleLinkClick("/dashboard")} 
              className="flex items-center space-x-2"
            >
              <MdDashboard />
              <span>Dashboard</span>
            </button>
          </li>
          <li className='font-semibold text-lg'>
            <button 
              onClick={() => handleLinkClick("/dashboard/current")} 
              className="flex items-center space-x-2"
            >
              <MdDashboard />
              <span>Current Shift</span>
            </button>
          </li>
          <li className='font-semibold text-lg'>
            <button 
              onClick={() => handleLinkClick("/dashboard/users")} 
              className="flex items-center space-x-2"
            >
              <FaUsers />
              <span>Manage Miners</span>
            </button>
          </li>
          <li className='font-semibold text-lg'>
            <button 
              onClick={() => handleLinkClick("/dashboard/add-miners")} 
              className="flex items-center space-x-2"
            >
              <IoAddCircle />
              <span>Add Miners</span>
            </button>
          </li>
          <li className='font-semibold text-lg'>
            <button 
              onClick={() => handleLinkClick("/dashboard/schedules")} 
              className="flex items-center space-x-2"
            >
              <FaMapMarkerAlt />
              <span>Map</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
