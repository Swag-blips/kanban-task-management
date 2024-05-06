import React from "react";
import Card from "./Card";

const Doing = () => {
  return (
    <section className="mt-[24px] w-[280px]">
      <div className=" flex items-center gap-[12px]">
        <div className="h-[15px] w-[15px] rounded-full bg-[#8471F2]"></div>
        <p className="font-bold text-[12px] text-[#828FA3] tracking-[2.4px]">
          DOING
        </p>
      </div>
      <div className="mt-[24px] flex flex-col gap-[20px]">
        <Card />
      </div>
    </section>
  );
};

export default Doing;
