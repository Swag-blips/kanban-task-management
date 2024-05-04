import React from "react";
import logo from "../../assets/logo-dark.svg";
import Boards from "./Boards";
import Switch from "./Switch";
import Hide from "./Hide";

const Sidebar = () => {
  return (
    <aside className="w-[300px] z-10 fixed top-0 border-r-[0.5px] border-[#EBF0FB]  bg-[#fff] h-[100vh] p-[1px]">
      <div className="mt-[32px] ml-[32px]">
        <img src={logo} alt="logo" />
      </div>

      <Boards />

      <Switch />
      <Hide />
    </aside>
  );
};

export default Sidebar;
