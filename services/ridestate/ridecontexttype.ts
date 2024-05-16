import {IRideService} from "@/services/ride/IRideService";


export interface RideContextType {
    rideRequested : boolean
    RideRequested: () => void,
    RideRequestCancelled: () => void,
    rideService : IRideService
}