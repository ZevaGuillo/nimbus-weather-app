import { useWeatherStore } from "@/store/weatherStore";
import moment from "moment";
import Icon from "./Icon";

const Forecast = () => {
  const {
    weather: { daily },
  } = useWeatherStore();

  console.log(daily);

  return (
    <div className=" flex flex-col">
      <h3 className="text-light text-2xl py-5 font-bold">
        3 Days <span className="font-light">Forecast</span>
      </h3>
      <div className="flex flex-col gap-3">
        {daily && daily.slice(0,3).map(day => (
          <div key={day.dt} className="bg-dark2 text-light flex justify-between rounded-3xl">
            <div className="flex p-5 items-center text-[2rem] gap-2">
                <Icon weatherId={day.weather[0].icon}/>
                <div className="text-base">
                    <h4 className="text-base font-bold ">{moment(day.dt * 1000).format("dddd")}</h4>
                    <p className="text-indigo-200 opacity-40">{day.weather[0].main}</p>
                </div>
            </div>
            <div className="bg-indigo-400 px-4 min-w-max text-light grid place-content-center rounded-3xl">
                {`${Math.floor(day.temp.day)}° / ${Math.floor(day.temp.night)}°`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
