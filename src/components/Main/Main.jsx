import React, { useState } from "react";
import NoColumn from "./NoColumn";
import Column from "./Column";

const Main = () => {
  const [active, setActive] = useState(true);
  return (
    <main className="w-full h-auto overflow-y-scroll  ">
      <section className="ml-[24px] ">
        <Column />
      </section>
      <section
        className={`flex justify-center items-center md:ml-[8rem] w-full h-screen fixed top-0 left-0 ${
          active ? "hidden" : ""
        }`}
      >
        <NoColumn />
      </section>
    </main>
  );
};

export default Main;
