import axios, { AxiosInstance } from "axios";

export const mapboxAPI: AxiosInstance = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        access_token: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
        language: "es",
        limit: 5,
    },
})

export const fetchPlaces = async (place: string): Promise<searchSuggestion[] | undefined> => {

    try {
        const response = await mapboxAPI.get<any>(`/${place}.json`);

        console.log(response);
        
        return response.data.features.map((lugar: any) => ({
            id: lugar.id,
            fullname: lugar.place_name,
            lng: lugar.center[0],
            lat: lugar.center[1],
        })) as searchSuggestion[];
    } catch (error) {
        console.log(error);
    }
};
