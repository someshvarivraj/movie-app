import React from "react";

const DropDown = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="dropdown dropdown-hover ">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 rounded hover:bg-slate-600"
        >
          Year
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 hover:bg-slate-500 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>2024</a>
          </li>
          <li>
            <a>2023</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
