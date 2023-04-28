import { create } from 'zustand';

export const useWeatherStore = create<WeatherState>((set)=>({
    lat: 0,
    lon: 0,
    place: {} as Location,
    weather: {} as WeatherResponse,
    image: {} as Image,
    setLocation: (lat , lon) => set({lat, lon}),
    setPlace: (place) => set({place}),
    setWeather: (weather) => set({weather}),
    setImage: (image) => set({image}),
    setNameImageOptional: (image_name) => set({image_name})
}))