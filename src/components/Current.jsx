import React, { useState } from 'react'
import main2 from "/main2.png"

const Current = () => {

  const [isChecked, setIsChecked] = useState(false);


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

 
  const handleButtonClick = () => {
    if (isChecked) {
      alert("Entry allowed. Safety measures are confirmed.");
    }
  };

  return (
    <>
      <div className="w-full">
        <img src={main2} className="w-full h-auto" alt="Main" />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-2xl container mx-auto xl:px-24 px-4 pt-10">
          
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-xs md:text-sm lg:text-l font-extrabold">Name</th>
                  <th className="text-xs md:text-sm lg:text-l font-extrabold">Mining Block</th>
                  <th className="text-xs md:text-sm lg:text-l font-extrabold">Entry Time</th>
                  <th className="text-xs md:text-sm lg:text-l font-extrabold">Safety<br /> Measures</th>
                  <th className="text-xs md:text-sm lg:text-l font-extrabold">Entry</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-8 w-8 md:h-12 md:w-12">
                          <img
                            src="https://cdn.vectorstock.com/i/preview-1x/68/01/engineer-avatar-worker-architect-construction-vector-24016801.jpg"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xs md:text-sm">Rakesh</div>
                        <div className="text-xs opacity-50">Utrakhand</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-xs md:text-sm lg:text-base">Main Block</td>
                  <td>
                    <input type="time" className="input input-bordered w-full" />
                  </td>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                </tr>

                {/* row 2 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-8 w-8 md:h-12 md:w-12">
                          <img
                            src="https://cdn.vectorstock.com/i/preview-1x/68/01/engineer-avatar-worker-architect-construction-vector-24016801.jpg"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xs md:text-sm">Prince</div>
                        <div className="text-xs opacity-50">Karnataka</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-xs md:text-sm lg:text-base">Workshops</td>
                  <td>
                    <input type="time" className="input input-bordered w-full" />
                  </td>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                </tr>

                {/* row 3 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-8 w-8 md:h-12 md:w-12">
                          <img
                            src="https://cdn.vectorstock.com/i/preview-1x/68/01/engineer-avatar-worker-architect-construction-vector-24016801.jpg"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xs md:text-sm">Akash</div>
                        <div className="text-xs opacity-50">Uttrakhand</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-xs md:text-sm lg:text-base">Maintenance Areas</td>
                  <td>
                    <input type="time" className="input input-bordered w-full" />
                  </td>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full mt-10 flex flex-col md:flex-row justify-around gap-4">
            <button className="btn btn-wide bg-red text-2xl">Emergency</button>
            <button className="btn btn-wide bg-red text-2xl">Danger</button>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleCheckboxChange}
              checked={isChecked} 
            />
            <h1 className="text-sm md:text-base lg:text-2xl font-normal">All the safety measures are checked</h1>
          </div>

      
          <button
            className={`btn btn-primary mt-4 ${!isChecked ? 'btn-disabled' : ''}`}
            onClick={handleButtonClick}
            disabled={!isChecked} 
          >
            Allow Entry
          </button>
        </div>
      </div>
    </>
  );
};

export default Current;
