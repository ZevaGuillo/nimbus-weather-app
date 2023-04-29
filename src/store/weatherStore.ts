import { create } from 'zustand';

export const useWeatherStore = create<WeatherState>((set)=>({
    id: '',
    lat: 0,
    lon: 0,
    place: {} as Location,
    weather: {} as WeatherResponse,
    image: {} as Image,
    setLocation: (lat , lon) => set({lat, lon}),
    setPlace: (place) => set({place}),
    setWeather: (id, weather) => set({weather,id}),
    setImage: (image) => set({image}),
    setNameImageOptional: (image_name) => set({image_name})
}))