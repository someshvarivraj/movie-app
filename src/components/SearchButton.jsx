import React from "react";

const SearchButton = (props) => {
  return (
    <div className="flex flex-col justify-center ml-2 rounded">
      <button
        className="btn bg-white rounded text-black hover:bg-white hover:text-black"
        onClick={() => {
          props.b(props.a);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchButton;
