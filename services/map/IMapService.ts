import {GeoLocation} from "@/data/models/GeoLocation";
import {Driver} from "@/data/models/Driver";


export interface IMapService {
    GetCurrentUserLocation() : Promise<GeoLocation>
    GetDriversLocations() : Promise<Driver[]>
    GetGeoLocationByName(query : string) : Promise<void>
    GetGeoCodeLocationName(locationReq : GeoLocation) : Promise<string>
}