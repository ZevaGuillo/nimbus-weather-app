import { useHistoryStore } from "@/store/historyStore";
import HistoryItem from "./HistoryItem";

const History = () => {
  const { places } = useHistoryStore();

  return (
    <div className="py-3 flex flex-col w-full lg:w-[20rem] relative">
      <h2 className="text-light text-2xl py-5 font-bold lg:hidden">History</h2>

      <div className=" p-2 h-[31rem] lg:h-[calc(100%+8rem)] w-full lg:w-[87%] lg:absolute lg:-top-32 flex flex-col justify-end gap-3 overflow-hidden">
        {places.map(place => (
          <HistoryItem
            key={`${place.lat}${place.lon}`}
            place={place}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
