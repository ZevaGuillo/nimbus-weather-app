import { useWeatherStore } from "@/store/weatherStore";
import { Droplet, Eye, Sunrise, Sunset, Thermometer, Wind } from "lucide-react";

const WeatherData = () => {
  const {
    weather: { current },
  } = useWeatherStore();

  return (
    <>
      {current && (
        <section className="flex-1 md:px-16 flex flex-col text-light">
          <h2 className="text-2xl py-5 font-bold">Today&apos;s Highlights</h2>
          <div className="flex-1 grid grid-cols-2 gap-3">
            <div className="weather-data-card">
              <h2 className="font-medium opacity-60 mb-4">Feels Like</h2>
              <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row justify-between ">
                <p className="lg:self-end text-2xl flex items-center">
                  {current.feels_like}°
                </p>
                <p className="text-sm lg:w-1/2 opacity-40">
                  <Thermometer />
                  The temperature you actually feel
                </p>
              </div>
            </div>
            <div className="weather-data-card">
              <h2 className="font-medium opacity-60 mb-4">Humidity</h2>
              <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row justify-between ">
                <p className="lg:self-end text-2xl flex items-end">
                  {current.humidity}%
                </p>
                <p className=" text-sm lg:w-1/2 opacity-40">
                  <Droplet />
                  The dew point is {current.dew_point}° right now
                </p>
              </div>
            </div>
            <div className="weather-data-card">
              <h2 className="font-medium opacity-60 mb-4">Wind Speed</h2>
              <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row justify-between ">
                <p className="lg:self-end text-2xl flex items-end">
                  {current.wind_speed}m/s
                </p>
                <p className="text-sm lg:w-1/2 opacity-40">
                  <Wind />
                  Air movement velocity.
                </p>
              </div>
            </div>
            <div className="weather-data-card">
              <h2 className="font-medium opacity-60 mb-4">Visibility</h2>
              <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row justify-between ">
                <p className="lg:self-end text-2xl flex items-end">
                  {current.visibility}m/s
                </p>
                <p className="text-sm lg:w-1/2 opacity-40">
                  <Eye />
                  The distance you can see clearly.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WeatherData;
