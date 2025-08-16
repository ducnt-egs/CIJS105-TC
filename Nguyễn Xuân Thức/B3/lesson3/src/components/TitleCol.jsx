import React from "react";
const TitleCol = ({ nameCol, numberTask }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <h3 className="font-bold ">{nameCol}</h3>
          <p className="px-3 py-1 rounded-full bg-gray-300 font-bold">{numberTask}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="px-3 py-1 rounded-full bg-gray-300 font-bold">+</p>
          <p className="px-3 py-1 rounded-full bg-gray-300 font-bold">...</p>
        </div>
      </div>
    </>
  );
};

export default TitleCol;
