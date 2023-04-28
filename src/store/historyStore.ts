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

                let newPlaces = [...get().places, { lat, lon, name }];
                if (newPlaces.length > 4) {
                  newPlaces = newPlaces.slice(-4);
                }

                return { places: newPlaces }
            }),
        }),
        {
            name:'place-storage',
            storage: createJSONStorage(()=>localStorage)
        }
    )
)