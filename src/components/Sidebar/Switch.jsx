import React from "react";
import lightIcon from "../../assets/icon-light-theme.svg";
import darkIcon from "../../assets/icon-dark-theme.svg";

const Switch = () => {
  return (
    <section className=" ml-[24px] bottom-[88px]  absolute   p-[1px] ">
      <div className="flex items-center gap-[24px] bg-[#F4F7FD] w-[251px] rounded-md h-[48px] justify-center">
        <div>
          <img src={lightIcon} alt="light icon" />
        </div>
        <label className="inline-flex items-center mb-5 cursor-pointer mt-5">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <div>
          <img src={darkIcon} alt="dark icon" />
        </div>
      </div>
    </section>
  );
};

export default Switch;
