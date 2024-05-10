import {GeoLocation} from "@/data/models/GeoLocation";


export interface IMapService {
    GetCurrentUserLocation() : Promise<GeoLocation>
}