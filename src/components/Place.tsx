
import React from "react";
import Search from "./Search";

const Place = () => {
  return (
    <div className="p-5 gap-4 flex flex-col lg:p-10 lg:justify-between lg:flex-row w-full h-[25rem] rounded-[2.5rem] bg-light">
      <div className="lg:px-16 grid place-content-center">
        <h1 className="text-4xl text-dark font-bold">Guayaquil</h1>
      </div>
      <Search/>
    </div>
  );
};

export default Place;
