import {IRideService} from "@/services/ride/IRideService";


export interface RideContextType {
    showRidePopUp : boolean
    OpenRidePopUp: () => void,
    CloseRidePopUp: () => void,
    rideService : IRideService
}