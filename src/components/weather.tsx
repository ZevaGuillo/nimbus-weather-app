import React from "react";

const Weather = () => {
  return (
    <div className="absolute flex flex-col left-0 top-[45%] lg:top-[calc(12.5rem-3.7rem)] w-32  rounded-e-[2.5rem] h-40 lg:h-48 bg-indigo-400 text-light">
        
       <span className="absolute -top-4 w-4 h-4 bg-indigo-600"><div className="w-full h-full bg-dark rounded-bl-3xl"/></span>
       <span className="absolute -bottom-4 w-4 h-4 bg-indigo-400"><div className="w-full h-full bg-dark rounded-tl-3xl"/></span> 

      <div className="flex-1 p-2 bg-indigo-600 grid place-content-center rounded-e-[2.5rem] rounded-bl-lg">
        Cloudy
      </div>

      <div className="flex-1 grid place-content-center text-4xl">31C</div>

    </div>
  );
};

export default Weather;
