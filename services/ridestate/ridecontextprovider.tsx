
import {RideContext} from "@/services/ridestate/ridecontext";
import {RideContextType} from "@/services/ridestate/ridecontexttype";
import {AuthenticationService} from "@/services/authentication/AuthenticationService";
import {IAuthenticationService} from "@/services/authentication/IAuthenticationService";
import {RideService} from "@/services/ride/RideService";
import {IRideService} from "@/services/ride/IRideService";
import {useState} from "react";

export default function RideContextProvider({children,authService} : {children : React.ReactElement[], authService: IAuthenticationService}) {
    const [showRidePopUp, setShowRidePopUp] = useState<boolean>(false)
    const _rideService : IRideService = new RideService(authService)

    function OpenRidePopUp() {
        console.log("show ride pop up " + showRidePopUp)
        setShowRidePopUp(true)
    }

    function CloseRidePopUp() {
        setShowRidePopUp(false)
    }

    const contextValues : RideContextType = {
        rideService: _rideService,
        showRidePopUp: showRidePopUp,
        OpenRidePopUp: OpenRidePopUp,
        CloseRidePopUp: CloseRidePopUp
    }


    return <>
        <RideContext.Provider value={contextValues}>
            {children}
        </RideContext.Provider>
    </>
}