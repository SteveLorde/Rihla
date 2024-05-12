import {Driver} from "@/data/models/Driver";
import {GeoLocation} from "@/data/models/GeoLocation"
import {Ride} from "@/data/models/Ride";

export interface IRideService {
    InitializeRideSocket(): void
    CloseRideSocket() : void
    RequestRide(rideReq : Ride) : void
    GetDriverDetails() : Promise<Driver>
    GetRealtimeDriverLocation() : GeoLocation
    CalculateFare(ride : Ride) : number
}

