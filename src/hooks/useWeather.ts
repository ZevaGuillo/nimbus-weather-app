import { fetchWeather } from "@/apis/openweathermapApi";
import { useQuery } from "@tanstack/react-query";

import { useLocation } from "./useLocation";
import { useWeatherStore } from "@/store/weatherStore";
import { fetchImagePlace } from "@/apis/unsplashApi";
import { useHistoryStore } from "@/store/historyStore";

export const useWeather = () => {
    const { lat, lon, place, setWeather, setImage, image_name, setNameImageOptional, weather } = useWeatherStore()
    const {setPlace} = useHistoryStore()
    const locationQuery = useLocation()
    const weatherQuery = useQuery(
        ['weather', lat, lon],
        () => fetchWeather(lat, lon),
        {
            enabled: !!lat && !!lon,
            onSuccess: (data) => {
                setWeather(data as WeatherResponse)
                setNameImageOptional('')
                if(data){
                    setPlace(data.lat, data.lon, place.name)
                }
            }
        }
    );

    const imageQuery = useQuery(
        ['imageW', place.name, image_name],
        () => fetchImagePlace(image_name || place.name),
        {
            enabled: !!place.name,
            onSuccess: setImage,
            refetchOnWindowFocus: false,
            onError: (error) => {
                setNameImageOptional( weather.current.weather[0].main ||'weather wallpaper cloud')
            },  
        }
    );


    

    return {
        locationQuery,
        weatherQuery,
        imageQuery,
    }
};
