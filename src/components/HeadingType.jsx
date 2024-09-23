import React from "react";

const HeadingType = (props) => {
  const bgColor = props.bg ? "bg-pink-500" : "hover:bg-slate-600";
  return (
    <div
      className={`"flex flex-col justify-center ${bgColor} rounded p-2 m-1 cursor-pointer"`}
      onClick={props.onClick}
    >
      <div className="font-semibold font-lg">{props.heading}</div>
    </div>
  );
};

export default HeadingType;
