import React from 'react';
import { motion } from 'framer-motion';

const Details = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 lg:flex-col items-center justify-center">
      
    
      <motion.div 
        className="flex justify-center items-center h-40 bg-gray-400 border-2 pt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="font-extrabold text-center text-xl lg:text-2xl">
          Miners Safety Is Of Atmost Importance
        </h1>
      </motion.div>

      
      <motion.div 
        className="card card-side bg-base-100 shadow-xl mt-16 lg:mt-[9rem] flex flex-col lg:flex-row"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Image Section with Animation */}
        <motion.figure 
          className="flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <img
            className="h-[15rem] w-full lg:h-[20rem] lg:w-[15rem] object-cover"
            src="https://media.gettyimages.com/id/96390221/photo/coal-worker-with-handful-of-coal.jpg?s=612x612&w=0&k=20&c=LuwxDlhNKatfqTSlLw3aGp4lbQ9pF8a82B6HvINhBpw="
            alt="Miner"
          />
        </motion.figure>

        {/* Card Content with Sequential Animation */}
        <motion.div 
          className="card-body bg-gray-300 lg:h-[20rem] lg:w-[25rem] p-4 lg:p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="card-title text-xl lg:text-2xl">
            Total Number of Miners - 200
          </h2>
          <hr className="my-2" />
          <h3 className="card-title mt-5 text-lg lg:text-xl">
            Total Number of Miners in current shift - 30
          </h3>
          <hr className="my-2" />
          <h2 className="card-title mt-5 text-lg lg:text-xl">
            Total Number of Miners in next shift - 24
          </h2>
          <hr className="my-2" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Details;
