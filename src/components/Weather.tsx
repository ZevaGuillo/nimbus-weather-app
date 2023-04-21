import { useWeatherStore } from "@/store/weatherStore";
import { UseQueryResult } from "@tanstack/react-query";
import React, { FC } from "react";
import Loading from "./Loading";

interface WeatherProps {
  weatherQuery: UseQueryResult<WeatherResponse, unknown>;
}

const Weather: FC<WeatherProps> = ({ weatherQuery }) => {
  const {
    weather: { weather, main },
  } = useWeatherStore();

  if (weatherQuery.isError) {
    return <p>Error!</p>;
  }

  return (
    <div className="absolute z-10 flex flex-col left-0 top-[45%] lg:top-[calc(12.5rem-3.7rem)] w-32 shadow-2xl rounded-e-[2.5rem] h-40 lg:h-48 bg-indigo-400 text-light">
      <span className="absolute -top-4 w-4 h-4 bg-indigo-600">
        <div className="w-full h-full bg-dark rounded-bl-3xl" />
      </span>
      <span className="absolute -bottom-4 w-4 h-4 bg-indigo-400">
        <div className="w-full h-full bg-dark rounded-tl-3xl" />
      </span>

      <div className="flex-1 p-2 shadow-md bg-indigo-600 grid place-content-center rounded-e-[2.5rem] rounded-bl-lg">
        {weatherQuery.isFetching ? <Loading /> : weather && weather[0].main}
      </div>

      <div className="flex-1 flex justify-center items-center">
        <p className="flex text-3xl">
          {weatherQuery.isFetching ? (
            <Loading />
          ) : (
            <>
              {main && Math.floor(main.temp)}
              <span className="text-sm">°C</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Weather;
