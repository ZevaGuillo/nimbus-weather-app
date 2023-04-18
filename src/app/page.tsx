
// https://dribbble.com/shots/10544234-Weather-Forecast-Design-Concept-Dark-Theme/attachments/2343785?mode=media

import Place from "@/components/Place";
import Weather from "@/components/Weather";


export default async function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-10">
      <Weather/>
      <Place/>
    </main>
  );
}
