import React, { useState } from 'react';
import main2 from "/main2.png";

const Current = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [rowChecks, setRowChecks] = useState([
    { safety: false, entry: false },
    { safety: false, entry: false },
    { safety: false, entry: false }
  ]);

  const handleCheckboxChange = (rowIndex, checkboxType) => {
    const updatedRowChecks = rowChecks.map((row, index) => 
      index === rowIndex ? { ...row, [checkboxType]: !row[checkboxType] } : row
    );
    setRowChecks(updatedRowChecks);
  };

  const handleButtonClick = () => {
    const allChecked = rowChecks.every(row => row.safety && row.entry);
    if (allChecked) {
      alert("Entry allowed. Safety measures are confirmed.");
    } else {
      alert("Please ensure all safety measures are confirmed before allowing entry.");
    }
  };

  const handleSafetyCheck = () => {
    const allChecked = rowChecks.every(row => row.safety);
    setIsChecked(allChecked);
  };

  return (
    <>
      <div className="w-full">
        <img src={main2} className="w-full h-auto" alt="Main" />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-2xl container mx-auto xl:px-24 px-4">
          
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-xs md:text-sm lg:text-l font-extrabold">Name</th>
                  <th className="text-xs md:text-sm lg:text-l font-extrabold">Mining Block</th>
                  <th className="text-xs md:text-sm lg:text-l font-extrabold">Entry Time</th>
                  <th className="text-xs md:text-sm lg:text-l font-extrabold">Safety Measures</th>
                  <th className="text-xs md:text-sm lg:text-l font-extrabold">Entry</th>
                </tr>
              </thead>
              <tbody>
                {rowChecks.map((row, rowIndex) => (
                  <tr key={rowIndex}>
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
                          <div className="font-bold text-xs md:text-sm">Name {rowIndex + 1}</div>
                          <div className="text-xs opacity-50">Location {rowIndex + 1}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-xs md:text-sm lg:text-base">Block {rowIndex + 1}</td>
                    <td>
                      <input type="time" className="input input-bordered w-full" />
                    </td>
                    <td>
                      <label>
                        <input 
                          type="checkbox" 
                          className="checkbox" 
                          checked={row.safety} 
                          onChange={() => handleCheckboxChange(rowIndex, 'safety')} 
                        />
                      </label>
                    </td>
                    <td>
                      <label>
                        <input 
                          type="checkbox" 
                          className="checkbox" 
                          checked={row.entry} 
                          onChange={() => handleCheckboxChange(rowIndex, 'entry')} 
                        />
                      </label>
                    </td>
                  </tr>
                ))}
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
              onChange={handleSafetyCheck}
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
