interface WeatherState {
    id: string,
    lat: number,
    lon: number,
    place: Location,
    weather: WeatherResponse,
    image: Image,
    image_name?: string;
    setLocation: (lat: number, lon: number) => void,
    setPlace: (place: Location) => void,
    setWeather: (id:string, weather: WeatherResponse) => void,
    setImage: (weather: Image) => void
    setNameImageOptional: (image_name: string) => void
}
interface WeatherResponse {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: Current;
    hourly: Current[];
    daily: Daily[];
}
interface Current {
    dt: number;
    sunrise?: number;
    sunset?: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
    wind_gust?: number;
    pop?: number;
    rain?: Rain;
}
interface Rain {
    "1h": number;
}
interface Weather {
    id: number;
    main: Main;
    description: Description;
    icon: string;
}
enum Description {
    AlgoDeNubes = "algo de nubes",
    LluviaDeGranIntensidad = "lluvia de gran intensidad",
    LluviaLigera = "lluvia ligera",
    LluviaModerada = "lluvia moderada",
    MuyNuboso = "muy nuboso",
    Nubes = "nubes",
    NubesDispersas = "nubes dispersas",
}

enum Main {
    Clouds = "Clouds",
    Rain = "Rain",
}
interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
}
interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}
interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}
