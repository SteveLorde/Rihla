import {Location} from "@/data/models/Location";


export interface IMapService {
    GetCurrentUserLocation() : Promise<Location>
}