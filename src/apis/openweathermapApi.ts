import axios, { AxiosInstance } from "axios";

export const weatherAPI: AxiosInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      appid: process.env.NEXT_PUBLIC_OPENWEATHER,
      units: "metric",
      lang: "es",
    },
  });

export const fetchWeather = async (lat: number, lon: number) => {

    try {
        const response = await weatherAPI.get<any>(`/?lat=${lat}&lon=${lon}`);

        const { weather, main } = response.data;
  
  
        return {
          desc: weather[0].description,
          temp: main.temp,
          temp_min: main.temp_min,
          temp_max: main.temp_max,
        };
    } catch (error) {
        console.log(error);
    }
};
