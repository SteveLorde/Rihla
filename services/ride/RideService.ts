import {Driver} from "@/data/models/Driver";
import {GeoLocation} from "@/data/models/GeoLocation";
import {IRideService} from "@/services/ride/IRideService";
import axios from "axios"
import {Ride} from "@/data/models/Ride";
import {backendRealtimeComURL, backendURL} from "@/services/API";
import { io } from "socket.io-client";
import {IAuthenticationService} from "@/services/authentication/IAuthenticationService";
import {AuthenticationService} from "@/services/authentication/AuthenticationService";

export class RideService implements IRideService {

    private _authService : IAuthenticationService
    public fare : number = 0
    public vanfare : number = 0
    public rideInProgress : boolean = false

    constructor(authService : IAuthenticationService) {
        this._authService = authService
    }

    private rideSocket = io(`${backendRealtimeComURL}`)

    customHeaders = {
        'Authorization': `Bearer PLACEHOLDER FOR TOKEN`
    };

    InitializeRideSocket() {
        this.rideSocket.connect()
    }

    CloseRideSocket() {
        this.rideSocket.disconnect()
    }

    async GetDriverDetails(): Promise<Driver> {
        let driver : Driver = {} as Driver
        return await driver
    }

    GetRealtimeDriverLocation(): GeoLocation {
        let driverLocation : GeoLocation = {} as GeoLocation
        this.rideSocket.on("driverlocationupdate", (res : GeoLocation) => {
            driverLocation = res
        })
        return driverLocation
    }

    RequestRide(rideReq : Ride): void {
        if (!this._authService.isLoggedIn) {
            //FIRE POPUP ERROR

        }
        else {
            this.rideSocket.emit("requestride", rideReq)
        }
    }

    CancelRide() {
        this.rideInProgress = false
        this.fare = 0
        this.vanfare = 0
    }


    CalculateFare(distance : number): void {
        this.fare = 0
        //DISTANCE IS IN METERS
        while (distance > 0) {
            distance -= 100
            this.fare += 4.7
            //VAN FARE WILL HAVE DIFFERENT PRICING STRATEGY
            //this.vanfare += 3.0
        }
    }


}