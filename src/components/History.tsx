import { useHistoryStore } from "@/store/historyStore";
import HistoryItem from "./HistoryItem";

const History = () => {
  const { places } = useHistoryStore();

  return (
    <div className="flex flex-col">
      <h2 className="text-light text-2xl py-5 font-bold">History</h2>

      <div>
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
