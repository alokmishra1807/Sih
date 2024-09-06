import React from 'react';
import { motion } from 'framer-motion';

const Users = ({ nextShiftTime="12:00 PM - 4:00 PM", workersRequired=20, workersAvailable=18 }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <motion.h1 
        className="text-2xl font-bold text-center mb-4" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Next Shift Details
      </motion.h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Next Shift Time */}
        <motion.div 
          className="flex-1 mb-4 md:mb-0"
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-2">Next Shift Time</h2>
          <p className="text-lg font-medium">{nextShiftTime}</p>
        </motion.div>
        
        {/* Workers Required */}
        <motion.div 
          className="flex-1 mb-4 md:mb-0"
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-2">Workers Required</h2>
          <p className="text-lg font-medium">{workersRequired}</p>
        </motion.div>

        {/* Workers Available */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-2">Workers Available</h2>
          <p className="text-lg font-medium">{workersAvailable}</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-12 p-6 bg-gray-200 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">Safety Measures for Coal Miners</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">Wear protective gear at all times, including helmets, gloves, and safety boots.</li>
          <li className="mb-2">Ensure that all safety equipment is in good condition and functioning properly.</li>
          <li className="mb-2">Follow all safety protocols and guidelines provided by the mining authority.</li>
          <li className="mb-2">Regularly participate in safety training and drills.</li>
          <li className="mb-2">Report any safety hazards or concerns immediately to the supervisor.</li>
          <li className="mb-2">Maintain proper ventilation in the mining area to avoid harmful gases.</li>
          <li className="mb-2">Adhere to all emergency procedures and evacuation plans.</li>
        </ul>
        <div className="mt-6">
          <button 
            className="btn btn-primary w-full"
            aria-label="Submit for Admin Approval"
          >
            Submit for Admin Approval
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Users;
