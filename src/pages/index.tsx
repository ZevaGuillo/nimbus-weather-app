import Forecast from "@/components/Forecast";
import History from "@/components/History";
import Place from "@/components/Place";
import Weather from "@/components/Weather";
import WeatherData from "@/components/WeatherData";
import { useWeather } from "@/hooks/useWeather";
import { useHistoryStore } from "@/store/historyStore";
import { useWeatherStore } from "@/store/weatherStore";

export default function Home() {
  const { weather } = useWeatherStore();
  const { imageQuery, locationQuery, weatherQuery } = useWeather();
  const { places } = useHistoryStore();

  return (
    <div className="flex flex-col items-center justify-between pt-5 px-5 lg:pt-10 lg:px-10">
      <Weather weatherQuery={weatherQuery} />
      <Place
        imageQuery={imageQuery}
        locationQuery={locationQuery}
      />
      <div className=" flex-1 flex flex-col md:flex-row w-full flex-wrap">
        {weather.current && (
          <>
            <Forecast />
            <WeatherData />
            <History />
          </>
        )}
      </div>
    </div>
  );
}
