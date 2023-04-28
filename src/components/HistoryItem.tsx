import { fetchWeather } from "@/apis/openweathermapApi";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import Icon from "./Icon";
import { MapPin } from "lucide-react";
import { useWeatherStore } from "@/store/weatherStore";

interface ItemProps {
  place: { lat: number; lon: number; name: string };
}

const HistoryItem: FC<ItemProps> = ({ place }) => {
  const { data, isFetched, isError } = useQuery(
    [`${place.lat}+${place.lon}`],
    () => fetchWeather(place.lat, place.lon)
  );

  const {setLocation} = useWeatherStore()

  return (
    <section className="flex-1 p-2 self-stretch text-light font-bold bg-dark2 w-full min-h-[7rem] rounded-2xl flex transition-all hover:scale-105"
      onClick={()=>{
        setLocation(place.lat, place.lon)
      }}
    >
      {/* {data && data.current.temp} */}
      <div className="w-1/3 bg-dark bg-opacity-30 text-[3rem] grid place-content-center rounded-2xl">
        <Icon weatherId={data?.current.weather[0].icon || ""} />
      </div>
      <div className="p-5 font-normal flex flex-col justify-center">
        <h3 className="text-lg font-bold flex gap-2 items-center "><MapPin size={20} color="#F2F2F2"/>{place.name}</h3>
        <p>
          {data?.current.weather[0].main} |{" "}
          {data && (
            <>
              {Math.round(data.current.temp)}
              <span className="text-xs">°C</span>
            </>
          )}
        </p>
      </div>
    </section>
  );
};

export default HistoryItem;
