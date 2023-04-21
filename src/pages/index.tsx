import Place from "@/components/Place";
import Weather from "@/components/Weather";
import { useWeather } from "@/hooks/useWeather";


export default function Home() {

  const {imageQuery, locationQuery, weatherQuery} = useWeather()
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-10">
      <Weather weatherQuery={weatherQuery}/>
      <Place imageQuery={imageQuery} locationQuery={locationQuery}/>
    </div>
  );
}
