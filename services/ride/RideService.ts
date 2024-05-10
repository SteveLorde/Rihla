import {Driver} from "@/data/models/Driver";
import {Location} from "@/data/models/Location";
import {IRideService} from "@/services/ride/IRideService";
import axios from "axios"
import {Ride} from "@/data/models/Ride";
import {backendURL} from "@/services/API";

class RideService implements IRideService {



    isRideInProgress: boolean = false;

    GetDriverDetails(): Promise<Driver> {
        return Promise.resolve(undefined);
    }

    GetRealtimeDriverLocation(): Promise<Location> {
        return Promise.resolve(undefined);
    }

    RequestRide(rideReq : Ride): Promise<boolean> {
        return axios.post<boolean>(`${backendURL}/ride/requestride`, rideReq).then(res => res.data)
    }
}