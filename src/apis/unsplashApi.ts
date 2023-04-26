import axios, { AxiosInstance } from "axios";

export const unsplashAPI: AxiosInstance = axios.create({
    baseURL: "https://api.unsplash.com/search/photos",
    params: {
        per_page: "1",
        client_id: process.env.NEXT_PUBLIC_UNSPLASH,
    },
});


export const fetchImagePlace = async (place: string): Promise<Image | undefined> => {
    
    
    try {
        const response = await unsplashAPI.get<any>('',{params: {query: place}});
        const data = response.data;
        console.log(data);
        

        return {
          'urls': data.results[0].urls 
        } as Image;
        
    } catch (error) {
        throw new Error('something was wrong')
    }
};