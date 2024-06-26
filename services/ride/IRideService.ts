import {Driver} from "@/data/models/Driver";
import {GeoLocation} from "@/data/models/GeoLocation"
import {Ride} from "@/data/models/Ride";

export interface IRideService {
    rideFare : number
    vanfare : number
    rideInProgress : boolean
    InitializeRideSocket(): void
    CloseRideSocket() : void
    RequestRide(rideReq : Ride) : void
    CancelRide() : void
    GetDriverDetails() : Promise<Driver>
    GetRealtimeDriverLocation() : GeoLocation
    CalculateFare(distance : number) : void
}

