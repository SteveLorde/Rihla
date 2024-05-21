import {GeoLocation} from "@/data/models/GeoLocation";
import {Driver} from "@/data/models/Driver";


export interface IMapService {
    selectedDestinationName : string
    selectedDestinationDistance: number
    GetCurrentUserLocation() : Promise<GeoLocation>
    GetDriversLocations() : Promise<Driver[]>
    GetGeoLocationByName(query : string) : Promise<void>
    GetGeoCodeLocationName(locationReq : GeoLocation) : Promise<any>
    Route(startLocation : GeoLocation, destinationLocation: GeoLocation ): Promise<any>
}