import Forecast from "@/components/Forecast";
import Place from "@/components/Place";
import Weather from "@/components/Weather";
import WeatherData from "@/components/WeatherData";
import { useWeather } from "@/hooks/useWeather";
import { useHistorialStore } from "@/store/historialStore";
import { useWeatherStore } from "@/store/weatherStore";

export default function Home() {
  const { weather } = useWeatherStore();
  const { imageQuery, locationQuery, weatherQuery } = useWeather();
  const {places} = useHistorialStore();

  console.log(places);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-10">
      <Weather weatherQuery={weatherQuery} />
      <Place
        imageQuery={imageQuery}
        locationQuery={locationQuery}
      />
      <div className=" flex-1 flex flex-col md:flex-row w-full">
        <Forecast />
        <WeatherData/>
        <div className="w-1/4">historial</div>
      </div>
    </div>
  );
}
