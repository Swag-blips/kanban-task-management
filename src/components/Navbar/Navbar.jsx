import React from "react";
import verticalEllipse from "../../assets/icon-vertical-ellipsis.svg";

const Navbar = () => {
  return (
    <nav className="bg-white ml-[18.5rem] h-[97px] p-[1px]">
      <div className="flex items-center mt-[24px] justify-between">
        <div className=" ml-[24px]">
          <h1 className="font-bold text-[24px]">Platform Launch</h1>
        </div>

        <div className="flex items-center gap-[24px]">
          <button className=" text-white font-bold w-[164px] h-[48px] rounded-full bg-[#A8A4FF]">
            + Add New Task
          </button>
          <img
            src={verticalEllipse}
            alt="verticalEllipse"
            className="mr-[32px]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
