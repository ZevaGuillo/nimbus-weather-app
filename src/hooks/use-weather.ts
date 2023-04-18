
import { fetchPlaces } from "@/apis/mapboxAPI";
import { fetchWeather } from "@/apis/openweathermapApi";
import { fetchImagePlace } from "@/apis/unsplashApi";

import { useEffect, useState } from "react";


export const useWeather = () => {
  const [places, setPlaces] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);
  const [image, setImage] = useState<any>(null);

  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);

  const fetch = async () => {
    setPlaces(await fetchPlaces('guayaquil'))

    if(lat && lon){
      setWeather(await fetchWeather(lat, lon));
    }


    setImage(await fetchImagePlace('guayaquil'))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });

  }, [lat, lon]);

  useEffect(() => {
    fetch()
  }, [lat, lon])

  return {
    places, weather, image, lat, lon
  }

}
