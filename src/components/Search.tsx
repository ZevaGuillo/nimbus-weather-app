import { fetchPlaces } from "@/apis/mapboxAPI";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import Loading from "./Loading";
import { SearchIcon } from "lucide-react";
import { useWeatherStore } from "@/store/weatherStore";

const Search = () => {
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm] = useDebounce(searchTerm, 500);
  const { isLoading, isError, data } = useQuery(["search", debouncedTerm], () =>
    fetchPlaces(debouncedTerm)
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const { setLocation } = useWeatherStore();

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleOption = (place: searchSuggestion) => {
    setLocation(place.lat, place.lon);
  };

  return (
    <div ref={containerRef} className="z-50">
      <div className="flex items-center relative">
        <SearchIcon
          className="absolute left-2 opacity-30"
          size={20}
        />
        <input
          onFocus={() => setOpen(true)}
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          type="text"
          className="block w-full lg:w-72 rounded-xl border-0 pl-8 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-light placeholder:text-gray-400 focus:right-2 focus:ring-inset sm:text-sm sm:leading-6"
          placeholder="Search..."
        />
      </div>
      {open && data && data.length > 0 && (
        <div className="ml-1 mt-1 z-50 w-full lg:w-72 rounded-md border bg-light text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
          {isLoading ? (
            <div className="h-[5rem] grid place-content-center">
              <Loading />
            </div>
          ) : isError ? (
            <div>Error fetching data</div>
          ) : (
            <ul>
              {data &&
                data.map(item => (
                  <li
                    className="h-[3rem] overflow-ellipsis overflow-hidden whitespace-nowrap px-4 flex items-center border-b-[.5px] border-slate-800 border-opacity-10 hover:bg-gray-100"
                    key={item.id}
                    onClick={() => handleOption(item)}>
                    {item.fullname}
                  </li>
                ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
