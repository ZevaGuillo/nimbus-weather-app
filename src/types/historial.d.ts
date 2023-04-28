interface HistorialState{
    places: {lat: number, lon: number}[],
    setPlace: (lat: number, lon: number) => void
}