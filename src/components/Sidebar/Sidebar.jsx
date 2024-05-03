import React from "react";
import logo from "../../assets/logo-dark.svg";
import Boards from "./Boards";

const Sidebar = () => {
  return (
    <aside className="w-[300px] bg-[#fff] h-[100vh] p-[1px]">
      <div className="mt-[32px] ml-[32px]">
        <img src={logo} alt="logo" />
      </div>

      <Boards />
    </aside>
  );
};

export default Sidebar;
