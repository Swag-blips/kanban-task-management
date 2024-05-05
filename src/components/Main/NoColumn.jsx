import React from "react";

const NoColumn = () => {
  return (
    <div className="flex flex-col items-center gap-[32px]">
      <p className="text-[#828FA3] text-center text-[18px] font-bold whitespace-normal md:whitespace-pre-wrap">
        This board is empty. Create a new column to get started.
      </p>
      <button className="w-[174px] rounded-full font-bold h-[48px] bg-[#635FC7] text-white">
        + Add New Column
      </button>
    </div>
  );
};

export default NoColumn;
