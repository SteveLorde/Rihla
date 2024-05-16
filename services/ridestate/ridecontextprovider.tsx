
import {RideContext} from "@/services/ridestate/ridecontext";
import {RideContextType} from "@/services/ridestate/ridecontexttype";
import {AuthenticationService} from "@/services/authentication/AuthenticationService";
import {IAuthenticationService} from "@/services/authentication/IAuthenticationService";
import {RideService} from "@/services/ride/RideService";
import {IRideService} from "@/services/ride/IRideService";
import {useState} from "react";

export default function RideContextProvider({children,authService} : {children : React.ReactElement[], authService: IAuthenticationService}) {
    const [rideRequested, setRideRequested] = useState<boolean>(false)
    const _rideService : IRideService = new RideService(authService)

    function RideRequest() {
        setRideRequested(true)
    }

    function RideRequestCancelled() {
        setRideRequested(false)
    }

    const contextValues : RideContextType = {
        rideService: _rideService,
        rideRequested: rideRequested,
        RideRequested: RideRequest,
        RideRequestCancelled: RideRequestCancelled
    }


    return <>
        <RideContext.Provider value={contextValues}>
            {children}
        </RideContext.Provider>
    </>
}