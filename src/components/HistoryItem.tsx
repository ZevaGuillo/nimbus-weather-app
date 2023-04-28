import { fetchWeather } from "@/apis/openweathermapApi";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

interface ItemProps {
  place: { lat: number; lon: number };
}

const HistoryItem: FC<ItemProps> = ({ place }) => {
  const { data, isFetched, isError } = useQuery(
    [`${place.lat}+${place.lon}`],
    () => fetchWeather(place.lat, place.lon)
  );

  return (
    <div className="text-light py-5 font-bold">
      {data && data.current.temp}
    </div>
  );
};

export default HistoryItem;

