import React from 'react';
import removes from "/removed.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-400 w-full flex flex-col lg:flex-row justify-between items-center lg:h-auto py-4 px-4">
        
        {/* Logo and Heading Section */}
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
          <a className="btn btn-ghost flex-shrink-0 mb-2 lg:mb-0">
            <img className="h-[3rem] w-[10rem]" src={removes} alt="Logo" />
          </a>

          <div className="text-center lg:text-left lg:ml-4 mt-2 lg:mt-0">
            <p className="text-sm sm:text-base md:text-lg">
              SAFETY AND EFFICIENCY MEASURES FOR MINERS
            </p>
            <h1 className="font-extrabold text-blue-900 text-lg sm:text-xl md:text-2xl mt-2 lg:mt-0">
              Admin Portal
            </h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-none mt-4 lg:mt-0">
          <ul className="menu menu-horizontal px-1">
            <li><a className="font-extrabold text-blue-900">Link</a></li>
            <li>
              <details>
                <summary className="font-extrabold text-blue-900">Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>S</a></li>
                  <li><a>J</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
