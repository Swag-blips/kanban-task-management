import React from "react";
import Todo from "./Todo";
import Doing from "./Doing";
import Done from "./Done";
import NewColumn from "./NewColumn";

const Column = () => {
  return (
    <div className="flex gap-[24px] w-screen mb-[20px] ">
      <Todo />
      <Doing />
      <Done />
    </div>
  );
};

export default Column;
