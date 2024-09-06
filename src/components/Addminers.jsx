import React, { useState } from 'react';

const Addminers = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    experience: '',
    expertise: '',
    certification: '',
    contactNumber: '',
    emergencyContact: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log("Submitted Data:", formData);
    alert("Miner added successfully!");
    setFormData({
      name: '',
      address: '',
      experience: '',
      expertise: '',
      certification: '',
      contactNumber: '',
      emergencyContact: '',
      dateOfBirth: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Coal Miner</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="input input-bordered rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2" htmlFor="address">Address</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              className="input input-bordered rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Experience */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2" htmlFor="experience">Experience (years)</label>
            <input 
              type="number" 
              id="experience" 
              name="experience" 
              value={formData.experience} 
              onChange={handleChange} 
              className="input input-bordered rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Expertise */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2" htmlFor="expertise">Expertise</label>
            <input 
              type="text" 
              id="expertise" 
              name="expertise" 
              value={formData.expertise} 
              onChange={handleChange} 
              className="input input-bordered rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certification */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2" htmlFor="certification">Certification</label>
            <input 
              type="text" 
              id="certification" 
              name="certification" 
              value={formData.certification} 
              onChange={handleChange} 
              className="input input-bordered rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2" htmlFor="contactNumber">Contact Number</label>
            <input 
              type="tel" 
              id="contactNumber" 
              name="contactNumber" 
              value={formData.contactNumber} 
              onChange={handleChange} 
              className="input input-bordered rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Emergency Contact */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2" htmlFor="emergencyContact">Emergency Contact</label>
            <input 
              type="tel" 
              id="emergencyContact" 
              name="emergencyContact" 
              value={formData.emergencyContact} 
              onChange={handleChange} 
              className="input input-bordered rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2" htmlFor="dateOfBirth">Date of Birth</label>
            <input 
              type="date" 
              id="dateOfBirth" 
              name="dateOfBirth" 
              value={formData.dateOfBirth} 
              onChange={handleChange} 
              className="input input-bordered rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button 
            type="submit" 
            className="btn btn-primary px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Miner
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addminers;
