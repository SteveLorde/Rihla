import {Driver} from "@/data/models/Driver";
import {Location} from "@/data/models/Location"

export interface IRideService {
    isRideInProgress: boolean
    RequestRide() : Promise<boolean>
    GetDriverDetails() : Promise<Driver>
    GetRealtimeDriverLocation() : Promise<Location>
}

