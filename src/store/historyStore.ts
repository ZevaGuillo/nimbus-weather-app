import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'


export const useHistoryStore = create<HistoryState>()(
    persist(
        (set, get) => ({
            places: [] as {lat: number, lon: number, name: string}[],
            setPlace: (lat, lon, name) => set(() => {

                const exist = get().places.some(place => place.lat === lat && place.lon === lon);
                
                if(exist){
                    return { places: [...get().places] }
                }

                return { places: [...get().places, {lat, lon, name}] }
            }),
        }),
        {
            name:'place-storage',
            storage: createJSONStorage(()=>localStorage)
        }
    )
)