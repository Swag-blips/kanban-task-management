import React from "react";
import logo from "../../assets/logo-dark.svg";
import Boards from "./Boards";
import Switch from "./Switch";
import Hide from "./Hide";

const Sidebar = () => {
  return (
    <aside className="w-[300px] bg-[#fff] h-[100vh] p-[1px]">
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
