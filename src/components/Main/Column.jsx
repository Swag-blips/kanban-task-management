import React from "react";
import Todo from "./Todo";
import Doing from "./Doing";
import Done from "./Done";
import NewColumn from "./NewColumn";

const Column = () => {
  return (
    <div className="flex gap-[24px] ">
      <Todo />
      <Doing />
      <Done />
      <NewColumn />
    </div>
  );
};

export default Column;
