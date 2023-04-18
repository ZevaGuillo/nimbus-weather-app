import Place from "@/components/Place";
import Weather from "@/components/Weather";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-10">
      <Weather/>
      <Place/>
    </div>
  );
}