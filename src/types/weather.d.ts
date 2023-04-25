interface WeatherState {
    lat: number,
    lon: number,
    place: Location,
    weather: WeatherResponse,
    image: Image,
    image_name?:  string;
    setLocation: (lat: number, log: number) => void,
    setPlace: (place: Location) => void,
    setWeather: (weather: WeatherResponse) => void,
    setImage: (weather: Image) => void
    setNameImageOption: (image_name:string) => void
}

interface WeatherResponse {
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

interface Clouds {
    all: number;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

interface Rain {
    "1h": number;
}

interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}