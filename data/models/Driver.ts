import {GeoLocation} from "@/data/models/GeoLocation";

export interface Driver {
    name : string
    stars : number
    carModel : string
    carPlate : string
    location : GeoLocation
}