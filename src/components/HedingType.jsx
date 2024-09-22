import React from "react";

const HedingType = (props) => {
  return (
    <div className="flex flex-col justify-center hover:bg-slate-600 rounded p-2 m-1">
      <h1 className="font-semibold font-lg">{props.heading}</h1>
    </div>
  );
};

export default HedingType;
