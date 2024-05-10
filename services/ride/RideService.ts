import {Driver} from "@/data/models/Driver";
import {GeoLocation} from "@/data/models/GeoLocation";
import {IRideService} from "@/services/ride/IRideService";
import axios from "axios"
import {Ride} from "@/data/models/Ride";
import {backendRealtimeComURL, backendURL} from "@/services/API";
import { io } from "socket.io-client";
import {IAuthenticationService} from "@/services/authentication/IAuthenticationService";
import {AuthenticationService} from "@/services/authentication/AuthenticationService";

class RideService implements IRideService {

    private _authService : IAuthenticationService

    constructor(authService : AuthenticationService) {
        this._authService = authService
    }

    private rideSocket = io(`${backendRealtimeComURL}`)

    customHeaders = {
        'Authorization': `Bearer ${localStorage.getItem('usertoken')}`
    };

    isRideInProgress: boolean = false;

    InitializeRideSocket() {
        this.rideSocket.connect()
    }

    CloseRideSocket() {
        this.rideSocket.disconnect()
    }

    async GetDriverDetails(): Promise<Driver> {
        return Promise.resolve(undefined);
    }

    GetRealtimeDriverLocation(): Promise<GeoLocation> {
        this.rideSocket.on("driverlocationupdate")
    }

    async RequestRide(rideReq : Ride): Promise<boolean> {
        if (!this._authService.isLoggedIn) {
            //FIRE POPUP ERROR
        }
        else {
            this.rideSocket.emit("requestride", rideReq)
        }
        let check = await axios.post<boolean>(`${backendURL}/ride/requestride`, rideReq, {headers: this.customHeaders}).then(res => res.data)
    }
}