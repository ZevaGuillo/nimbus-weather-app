interface HistoryState {
    places: { id: string, lat: number, lon: number, name: string }[],
    setPlace: (id: string, lat: number, lon: number, name: string) => void
}