import React from "react";
import Card from "./Card";

const Done = () => {
  return (
    <section className="mt-[24px] w-[280px]">
      <div className=" flex items-center gap-[12px]">
        <div className="h-[15px] w-[15px] rounded-full bg-[#67E2AE]"></div>
        <p className="font-bold text-[12px] text-[#828FA3] tracking-[2.4px]">
          DONE
        </p>
      </div>
      <div className="mt-[24px] flex flex-col gap-[20px]">
        <Card />
      </div>
    </section>
  );
};

export default Done;
