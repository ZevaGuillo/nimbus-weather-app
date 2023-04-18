
import { Layout } from "@/components/layouts";
import QueryProvider from "@/context/QueryProvider";
import { WeatherProvider } from "@/context/WeatherProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryProvider>
        <WeatherProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WeatherProvider>
      </QueryProvider>
    </>
  );
}
