import Forecast from "@/components/Forecast";
import Place from "@/components/Place";
import Weather from "@/components/weather";
import { useWeather } from "@/hooks/useWeather";
import { useWeatherStore } from "@/store/weatherStore";

export default function Home() {
  const { weather } = useWeatherStore();
  const { imageQuery, locationQuery, weatherQuery } = useWeather();

  console.log(weather);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-10">
      <Weather weatherQuery={weatherQuery} />
      <Place
        imageQuery={imageQuery}
        locationQuery={locationQuery}
      />
      <div className=" flex-1 flex w-full">
        <Forecast />
        <div className="flex-1">datos</div>
        <div className="flex-1">historial</div>
      </div>
    </div>
  );
}
