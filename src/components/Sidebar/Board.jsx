import React, { useState } from "react";
import board from "../../assets/icon-board.svg";
import boardAlt from "../../assets/icon-board-alt.svg";
import boardAltWhite from "../../assets/board-alt-white.svg";

const Board = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="flex flex-col capitalize">
      <div
        className={`flex cursor-pointer items-center  gap-[16px] h-[48px] ${
          active == 1 ? "bg-[#635FC7] rounded-r-full ml-[-34px] pl-[34px]" : ""
        }`}
        onClick={() => setActive(1)}
      >
        <img src={active === 1 ? boardAltWhite : board} alt="board" />
        <p
          className={`font-bold text-[#828FA3] text-[15px] ${
            active == 1 ? "text-white" : ""
          }`}
        >
          Platform Launch
        </p>
      </div>
      <div
        className={`flex cursor-pointer items-center  gap-[16px] h-[48px] ${
          active == 2 ? "bg-[#635FC7] rounded-r-full ml-[-34px] pl-[34px]" : ""
        }`}
        onClick={() => setActive(2)}
      >
        <img src={active === 2 ? boardAltWhite : board} alt="board" />
        <p
          className={`font-bold text-[#828FA3] text-[15px] ${
            active == 2 ? "text-white" : ""
          }`}
        >
          Marketing Plan
        </p>
      </div>
      <div
        className={`flex cursor-pointer items-center  gap-[16px] h-[48px] ${
          active == 3 ? "bg-[#635FC7] rounded-r-full ml-[-34px] pl-[34px]" : ""
        }`}
        onClick={() => setActive(3)}
      >
        <img src={active === 3 ? boardAltWhite : board} alt="board" />
        <p
          className={`font-bold text-[#828FA3] text-[15px] ${
            active == 3 ? "text-white" : ""
          }`}
        >
          Roadmap
        </p>
      </div>
      <div className="flex items-center gap-[16px] h-[48px]">
        <img src={boardAlt} alt="board" />
        <p className="font-bold text-[#635FC7] text-[15px]">
          + create new board
        </p>
      </div>
    </div>
  );
};

export default Board;
