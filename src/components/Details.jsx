import React from 'react';

const Details = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 lg:flex-col items-center justify-center">
        <div className="flex justify-center items-center h-40 bg-gray-400 border-2 pt-10">
  <h1 className="font-extrabold text-center text-xl lg:text-2xl">
    Miners Safety Is Of Atmost Importance
  </h1>
</div>
      <div className="card card-side bg-base-100 shadow-xl mt-16 lg:mt-[9rem] flex flex-col lg:flex-row">
        
        {/* Image Section */}
        <figure className="flex-shrink-0">
          <img
            className="h-[15rem] w-full lg:h-[20rem] lg:w-[15rem] object-cover"
            src="https://media.gettyimages.com/id/96390221/photo/coal-worker-with-handful-of-coal.jpg?s=612x612&w=0&k=20&c=LuwxDlhNKatfqTSlLw3aGp4lbQ9pF8a82B6HvINhBpw="
            alt="Miner"
          />
        </figure>

        {/* Card Content */}
        <div className="card-body bg-gray-300 lg:h-[20rem] lg:w-[25rem] p-4 lg:p-8">
          <h2 className="card-title text-xl lg:text-2xl">Total Number of Miners - 200</h2>
          <hr className="my-2" />
          <h3 className="card-title mt-5 text-lg lg:text-xl">Total Number of Miners in current shift - 30</h3>
          <hr className="my-2" />
          <h2 className="card-title mt-5 text-lg lg:text-xl">Total Number of Miners in next shift - 24</h2>
          <hr className="my-2" />
                 </div>
                 
      </div>
    
    </div>
  );
};

export default Details;
