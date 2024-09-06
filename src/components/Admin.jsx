import React from 'react';
import { useNavigate } from 'react-router-dom';
import main from "/main.jpg";

const Admin = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/dashboard');
  }

  return (
    <>
      <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="hero-content flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
            
            {/* Image Section */}
            <div className="w-full max-w-xs md:max-w-md lg:max-w-sm shrink-0 shadow-2xl">
              <img 
                src={main} 
                className="w-full h-[200px] md:h-[300px] lg:h-[328px] rounded-md object-cover" 
                alt="main" 
              />
            </div>
            
            {/* Form Section */}
            <div className="card bg-base-100 w-full max-w-xs md:max-w-md lg:max-w-md shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="button" className="btn btn-primary w-full" onClick={handleLogin}>Login</button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
