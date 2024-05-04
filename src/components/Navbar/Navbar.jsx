import React from "react";
import verticalEllipse from "../../assets/icon-vertical-ellipsis.svg";
import logoMobile from "../../assets/logo-mobile.svg";
import chevronDown from "../../assets/icon-chevron-down.svg";
import addTask from "../../assets/icon-add-task-mobile.svg";

const Navbar = () => {
  return (
    <nav className="bg-white md:ml-[16rem] xl:ml-[18.5rem] h-[64px] md:h-[81px] xl:h-[97px] p-[1px]">
      <div className="flex items-center mt-[16px] xl:mt-[24px] justify-between">
        <div className=" ml-[24px] flex items-center">
          <img src={logoMobile} alt="mobile logo" className="md:hidden" />
          <div className="flex items-center gap-[8px]">
            <h1 className=" ml-[16px] md:ml-auto font-bold text-[18px] md:text-[20px] xl:text-[24px]">
              Platform Launch
            </h1>
            <img src={chevronDown} alt="chevron down" className="md:hidden " />
          </div>
        </div>

        <div className=" flex items-center gap-[24px]">
          <button className="hidden md:flex items-center justify-center  text-white font-bold w-[164px] h-[48px] rounded-full bg-[#A8A4FF] opacity-20">
            + Add New Task
          </button>
          <button className="md:hidden flex items-center justify-center text-white font-bold w-[48px] h-[32px] rounded-full bg-[#A8A4FF] opacity-20">
            <img src={addTask} alt="addTask" className="text-center" />
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
