import {MutableRefObject} from "react";
import {IMapService} from "@/services/map/IMapService";
import {IAuthenticationService} from "@/services/authentication/IAuthenticationService";
import {IRideService} from "@/services/ride/IRideService";

export interface MainContextType {
    mapService : IMapService
    authService : IAuthenticationService
}