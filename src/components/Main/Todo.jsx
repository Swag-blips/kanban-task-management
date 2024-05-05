import React from "react";

const Todo = () => {
  return (
    <section className="mt-[24px] w-[280px]">
      <div className=" flex items-center gap-[12px]">
        <div className="h-[15px] w-[15px] rounded-full bg-[#49C4E5]"></div>
        <p className="font-bold text-[12px] text-[#828FA3] tracking-[2.4px]">
          TODO (4)
        </p>
      </div>
      <div className="mt-[24px] flex flex-col gap-[20px]">
        <div className="w-full bg-white h-[88px] shadow-md rounded-xl">
          <div className="pl-[16px] pt-[24px] ">
            <p className="font-bold text-[15px]">
              Build UI for onboarding flow
            </p>
            <p className="font-bold mt-[8px] text-[#828FA3] text-[12px]">
              0 of 3 substasks
            </p>
          </div>
        </div>
        <div className="w-full bg-white h-[88px] shadow-md rounded-xl">
          <div className="pl-[16px] pt-[24px] ">
            <p className="font-bold text-[15px]">
              Build UI for onboarding flow
            </p>
            <p className="font-bold mt-[8px] text-[#828FA3] text-[12px]">
              0 of 3 substasks
            </p>
          </div>
        </div>
        <div className="w-full bg-white h-[88px] shadow-md rounded-xl">
          <div className="pl-[16px] pt-[24px] ">
            <p className="font-bold text-[15px]">
              Build UI for onboarding flow
            </p>
            <p className="font-bold mt-[8px] text-[#828FA3] text-[12px]">
              0 of 3 substasks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todo;
