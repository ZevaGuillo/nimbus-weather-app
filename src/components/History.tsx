import { useHistoryStore } from "@/store/historyStore";
import HistoryItem from "./HistoryItem";
import { useWeatherStore } from "@/store/weatherStore";
import { useEffect, useState } from "react";

const History = () => {
  const { places } = useHistoryStore();
  const { id } = useWeatherStore();
  const [history, setHistory] = useState(places);

  useEffect(() => {
    setHistory(places.filter(place => place.id !== id));
  }, [id, places]);

  return (
    <>
      {history.length > 0 && (
        <div className="flex flex-col w-full lg:w-[20rem] relative">
          <h2 className="text-light text-2xl py-5 font-bold ">
            History
          </h2>

          <div className="h-full w-full flex flex-col gap-3">
            {places
              .filter(place => place.id !== id)
              .map(place => (
                <HistoryItem
                  key={place.id}
                  place={place}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default History;
