import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";

const HomePage = () => {
  return (
    <div className="md:hidden">
      <Navbar />

      {/* <Sidebar /> */}

      <Main />
    </div>
  );
};

export default HomePage;
