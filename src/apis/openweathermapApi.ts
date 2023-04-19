import axios, { AxiosInstance } from "axios";

export const weatherAPI: AxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: process.env.NEXT_PUBLIC_OPENWEATHER,
    units: "metric",
    lang: "es",
  },
});

export const fetchWeather = async (lat: number, lon: number): Promise<WeatherResponse | undefined> => {

  try {
    const { data } = await weatherAPI.get<WeatherResponse>(`/data/2.5/weather/?lat=${lat}&lon=${lon}`);

    return data
  } catch (error) {
    console.log(error);
  }
};

export const fetchGeo = async (lat: number, lon: number): Promise<Location | undefined> => {

  try {
    const { data } = await weatherAPI.get<Location[]>(`/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1`);

    return data[0]

  } catch (error) {
    console.log(error);
  }
};