export interface RouteResponse {
    distance : number
    duration : number
    weight : number
    weight_name : string
    geometry: Coordinate
    legs: Leg[]
}

interface Coordinate {
    type: string
    coordinates: [number,number][]
}

interface Leg {
    distance: number
    duration: number
    steps: any[]
}