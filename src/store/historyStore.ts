import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'


export const useHistoryStore = create<HistoryState>()(
    persist(
        (set, get) => ({
            places: [] as {id:string, lat: number, lon: number, name: string}[],
            setPlace: (id, lat, lon, name) => set(() => {

                const exist = get().places.some(place => place.id === id);
                
                if(exist){
                
                    return { places: [...get().places] }
                }

                let newPlaces = [...get().places, { id, lat, lon, name }];
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