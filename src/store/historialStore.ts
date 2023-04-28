import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'


export const useHistorialStore = create<HistorialState>()(
    persist(
        (set, get) => ({
            places: [] as {lat: number, lon: number}[],
            setPlace: (lat: number, lon: number) => set(() => {

                const exist = get().places.some(place => place.lat === lat && place.lon === lon);
                
                if(exist){
                    return { places: [...get().places] }
                }

                return { places: [...get().places, {lat, lon}] }
            }),
        }),
        {
            name:'place-storage',
            storage: createJSONStorage(()=>localStorage)
        }
    )
)