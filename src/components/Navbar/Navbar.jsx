import React from "react";
import verticalEllipse from "../../assets/icon-vertical-ellipsis.svg";

const Navbar = () => {
  return (
    <nav className="bg-white md:ml-[16rem] xl:ml-[18.5rem] md:h-[81px] xl:h-[97px] p-[1px]">
      <div className="flex items-center md:mt-[16px] xl:mt-[24px] justify-between">
        <div className=" ml-[24px]">
          <h1 className="font-bold md:text-[20px] xl:text-[24px]">
            Platform Launch
          </h1>
        </div>

        <div className="flex items-center gap-[24px]">
          <button className=" text-white font-bold w-[164px] h-[48px] rounded-full bg-[#A8A4FF] opacity-20">
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
