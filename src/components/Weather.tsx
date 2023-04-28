import { useWeatherStore } from "@/store/weatherStore";
import { UseQueryResult } from "@tanstack/react-query";
import React, { FC } from "react";
import Loading from "./Loading";
import Icon from "./Icon";

interface WeatherProps {
  weatherQuery: UseQueryResult<WeatherResponse | undefined, unknown>;
}

const Weather: FC<WeatherProps> = ({ weatherQuery }) => {
  const {
    weather: { current},
  } = useWeatherStore();

  if (weatherQuery.isError) {
    return <p>Error!</p>;
  }

  return (
    <div className="absolute z-10 flex flex-col left-0 top-[25%] lg:top-[calc(12.5rem-6rem)] w-32 shadow-2xl rounded-e-[2.5rem] h-40 lg:h-48 bg-indigo-400 text-light">
      <span className="absolute -top-8 w-4 md:w-8 h-8 bg-indigo-600">
        <div className="w-full h-full bg-dark rounded-bl-3xl" />
      </span>
      <span className="absolute -bottom-8 w-4 md:w-8 h-8 bg-indigo-400">
        <div className="w-full h-full bg-dark rounded-tl-3xl" />
      </span>

      <div className="flex-1 p-2 shadow-md bg-indigo-600 grid place-content-center rounded-e-[2.5rem] rounded-bl-lg">
        {weatherQuery.isFetching ? (
          <Loading />
        ) : (
          current && (
            <div className="flex items-center flex-col">
              <div className="text-3xl text-[2.5rem]">
                <Icon weatherId={current.weather[0].icon} />
              </div>
              {current.weather[0].main}
            </div>
          )
        )}
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="flex text-3xl">
          {weatherQuery.isFetching ? (
            <Loading />
          ) : (
            <>
              {current && (
                <>
                  {Math.round(current.temp)}
                  <span className="text-sm">°C</span>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
