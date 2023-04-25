import React, { FC, useState } from "react";
import Search from "./Search";
import { useWeatherStore } from "@/store/weatherStore";
import Image from "next/image";
import { UseQueryResult } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

interface PlaceProps {
  locationQuery: UseQueryResult<Location, unknown>;
  imageQuery: UseQueryResult<Image, unknown>;
}

const Place: FC<PlaceProps> = ({ imageQuery, locationQuery }) => {
  const { place, image } = useWeatherStore();
  const [imageLoaded, setImageLoaded] = useState(false);

  if (locationQuery.isLoading || imageQuery.isFetching) {
    return (
      <Skeleton className="w-full h-[25rem] rounded-[2.5rem] bg-opacity-50 bg-slate-700" />
    );
  }

  if (locationQuery.isError || imageQuery.isError) {
    return <p>Error!</p>;
  }

  return (
    <div className=" relative overflow-hidden w-full h-[20rem] rounded-[2.5rem]">
      <div className="sticky w-full h-full">
        <Skeleton className={cn("w-full h-[25rem] rounded-[2.5rem] bg-opacity-50 bg-slate-700",{hidden:imageLoaded})} />
        {image && (
          <Image
            src={image.urls?.regular}
            alt="algo"
            fill
            priority
            onLoad={() => setImageLoaded(true)}
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      <div className="absolute top-0 p-5 bg-slate-900 bg-opacity-50 lg:p-10 h-full w-full gap-4 flex flex-col lg:justify-between lg:flex-row">
        <div className="lg:px-16 grid place-content-center">
          <h1 className="text-4xl text-light font-bold flex items-center gap-2"><MapPin size={28} color="#F2F2F2"/>{place.name}</h1>
          <p className="pl-9 text-gray-400 font-semibold">{place.country}</p>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Place;
