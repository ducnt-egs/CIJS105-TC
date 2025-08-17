import React from "react";

const TitleCol = ({ nameCol, numberTask }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm text-gray-700">{nameCol}</h3>
          <span className="px-2 py-1 rounded-full bg-gray-300 text-xs font-medium text-gray-600">
            {numberTask}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-300">
            +
          </button>
          <button className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-300">
            ⋯
          </button>
        </div>
      </div>
    </>
  );
};

export default TitleCol;