import React, { useState } from "react";

const DropDown = (props) => {
  const [selectedYear, setSelectedYear] = useState("Year");

  const years = Array.from({ length: 74 }, (v, i) => 2024 - i);
  const handleYearSelect = (year) => {
    if (year === null) {
      props.setYearValue(null);
      setSelectedYear("Year");
    } else {
      props.setYearValue(year);
      setSelectedYear(year);
    }
  };

  return (
    <div className="flex flex-col justify-center ">
      <div className="dropdown dropdown-hover ">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 rounded hover:bg-slate-600"
        >
          {selectedYear}
        </div>
        {
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 hover:bg-slate-500 rounded-box z-[1] w-52 p-2 shadow max-h-60 overflow-y-auto"
          >
            <li
              className="text-black bg-white"
              onClick={() => handleYearSelect(null)}
            >
              <a>None</a>
            </li>
            {years.map((year) => (
              <li key={year} onClick={() => handleYearSelect(year)}>
                <a>{year}</a>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default DropDown;
