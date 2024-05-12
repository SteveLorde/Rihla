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

    constructor(authService : IAuthenticationService) {
        this._authService = authService
    }

    private rideSocket = io(`${backendRealtimeComURL}`)

    customHeaders = {
        'Authorization': `Bearer ${localStorage.getItem('usertoken')}`
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

    CalculateFare(ride : Ride): number {
        const distanceAltitude = ride.destination.latitude - ride.source.latitude
        const distanceLongtitude = ride.destination.longitude - ride.source.longitude
        let fare = 0

        return fare
    }


}