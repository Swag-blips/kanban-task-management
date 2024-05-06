import React from "react";
import Card from "./Card";

const Todo = () => {
  return (
    <section className="mt-[24px] w-[280px] h-auto">
      <div className=" flex items-center gap-[12px]">
        <div className="h-[15px] w-[15px] rounded-full bg-[#49C4E5]"></div>
        <p className="font-bold text-[12px] text-[#828FA3] tracking-[2.4px]">
          TODO (4)
        </p>
      </div>
      <div className="mt-[24px] flex flex-col gap-[20px]">
        <Card />
      </div>
    </section>
  );
};

export default Todo;
