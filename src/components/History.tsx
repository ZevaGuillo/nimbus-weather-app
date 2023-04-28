import { useHistoryStore } from "@/store/historyStore";

const History = () => {
  const { places } = useHistoryStore();
  

  return (
    <div className="flex flex-col">
      <h2 className="text-light text-2xl py-5 font-bold">History</h2>
      <div>
        {places.map(place => (
            <div key={`${place.lat}${place.lon}`}>
                {place.lat}
            </div>
        ))}
      </div>
    </div>
  );
};

export default History;
