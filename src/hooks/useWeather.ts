import { fetchWeather } from "@/apis/openweathermapApi";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "./useLocation";
import { useWeatherStore } from "@/store/weatherStore";
import { useEffect } from "react";
import { fetchImagePlace } from "@/apis/unsplashApi";

export const useWeather = () => {
    const { lat, lon, place, setWeather, setImage } = useWeatherStore()
    const location = useLocation()
    const weatherQuery = useQuery(
        ['weather', lat, lon],
        () => fetchWeather(lat, lon),
        {
            enabled: !!lat && !!lon,
            onSuccess: setWeather
        }
    );

    const ImageQuery = useQuery(
        ['imageW', place.name],
        () => fetchImagePlace(place.name),
        {
            enabled: !!place.name,
            onSuccess: setImage
        }
    );


    return {}
};
