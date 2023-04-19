import Place from "@/components/Place";
import Weather from "@/components/Weather";
import { useLocation } from "@/hooks/useLocation";
import { useWeather } from "@/hooks/useWeather";


export default function Home() {

  const weather = useWeather()
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-10">
      <Weather/>
      <Place/>
    </div>
  );
}
