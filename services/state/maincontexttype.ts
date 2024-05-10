import {MutableRefObject} from "react";
import {IMapService} from "@/services/map/IMapService";
import {IAuthenticationService} from "@/services/authentication/IAuthenticationService";
import {IRideService} from "@/services/ride/IRideService";

export interface MainContextType {
    mapRef : MutableRefObject<any>
    SetMapRef: (ref : MutableRefObject<any>) => void
    mapService : IMapService
    authService : IAuthenticationService
    rideService : IRideService
}