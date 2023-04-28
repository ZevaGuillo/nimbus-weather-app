interface HistoryState{
    places: {lat: number, lon: number, name: string}[],
    setPlace: (lat: number, lon: number, name: string) => void
}