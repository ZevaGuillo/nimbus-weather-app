'use client'

import { useWeather } from "@/hooks/use-weather";
import React from "react";

const Weather = () => {
    const {places, weather, image, lat, lon} = useWeather()

    console.log(places, weather, image, lat, lon);
    
  return <div>fetch</div>;
};

export default Weather;
