import {Driver} from "@/data/models/Driver";
import {GeoLocation} from "@/data/models/GeoLocation"

export interface IRideService {
    isRideInProgress: boolean
    InitializeRideSocket(): void
    CloseRideSocket() : void
    RequestRide() : Promise<boolean>
    GetDriverDetails() : Promise<Driver>
    GetRealtimeDriverLocation() : Promise<GeoLocation>
}

