import {createContext} from "react";
import {RideContextType} from "@/services/ridestate/ridecontexttype";
import {RideService} from "@/services/ride/RideService";

export const RideContext = createContext<RideContextType>({
    showRidePopUp : false,
    OpenRidePopUp: () => {},
    CloseRidePopUp: () => {},
    rideService: {} as RideService
})