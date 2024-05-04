import React from "react";
import hideIcon from "../../assets/icon-hide-sidebar.svg";
import showIcon from "../../assets/icon-show-sidebar.svg";

const Hide = () => {
  return (
    <section className=" md:ml-[24px] xl:ml-[32px] bottom-[32px]  absolute p-[1px] ">
      <div className="flex items-center gap-[15px]">
        <img src={hideIcon} alt="hideIcon" />
        <p className="font-bold text-[15px] text-[#828FA3]">Hide Icon</p>
      </div>
    </section>
  );
};

export default Hide;
