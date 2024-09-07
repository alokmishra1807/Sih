import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import main from "/main.jpg";

const Admin = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/dashboard');
  }

  return (
    <>
      <div className="hero bg-gradient-to-r from-blue-400 via-gray-500 to min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div 
            className="hero-content flex flex-col lg:flex-row gap-6 lg:gap-12 items-center"
            initial={{ opacity: 0, y: 50, x:0 }}
            animate={{ opacity: 1, y: 0, x:10 }}
            transition={{ duration: 1 }}
          >
            
            {/* Image Section with Animation */}
            <motion.div 
              className="w-full max-w-xs md:max-w-md lg:max-w-sm shrink-0 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <img 
                src={main} 
                className="w-full h-[200px] md:h-[300px] lg:h-[328px] rounded-md object-cover" 
                alt="main" 
              />
            </motion.div>
            
            {/* Form Section with Subtle Animation */}
            <motion.div 
              className="card bg-gray-100 w-full max-w-xs md:max-w-md lg:max-w-md shrink-0 shadow-2xl rounded-lg overflow-hidden"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="card-body p-6">
                <div className="form-control">
               
                    <span className="label-text font-semibold text-xl">Admin Portal</span>
                  
                  <label className="label">
                    <span className="label-text font-semibold">Username</span>
                  </label>
                  <input type="username" placeholder="Username" className="input input-bordered input-primary focus:outline-none focus:ring-2 focus:ring-gray-500 transition" required />
                </div>
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered input-primary focus:outline-none focus:ring-2 focus:ring-gray-500 transition" required />
                  <label className="label mt-2">
                    <a href="#" className="label-text-alt link link-hover text-gray-600">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <motion.button 
                    type="button" 
                    className="btn btn-primary w-full bg-gray-700 hover:bg-gray-800"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogin}
                  >
                    Login
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Admin;
