import React, { useState } from "react";
import NoColumn from "./NoColumn";
import Tasks from "./Tasks";

const Main = () => {
  const [active, setActive] = useState(true);
  return (
    <main className="w-full h-screen">
      <section>
        <Tasks></Tasks>
      </section>
      <section className="flex justify-center items-center md:ml-[8rem] w-full h-screen fixed top-0 left-0">
        <NoColumn />
      </section>
    </main>
  );
};

export default Main;
