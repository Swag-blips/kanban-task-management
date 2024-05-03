import React from "react";
import Board from "./Board";

const Boards = () => {
  return (
    <>
      <section className="mt-[54px] ml-[32px] ">
        <p className="text-[#828FA3] tracking-[2.4px] uppercase text-[12px] font-bold ">
          all Boards (3)
        </p>
      </section>
      <section className="mt-[18px] w-[276px] pl-[32px] ">
        <Board />
      </section>
    </>
  );
};

export default Boards;
