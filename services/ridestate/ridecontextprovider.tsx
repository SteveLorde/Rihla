
import {RideContext} from "@/services/ridestate/ridecontext";
import {RideContextType} from "@/services/ridestate/ridecontexttype";
import {AuthenticationService} from "@/services/authentication/AuthenticationService";
import {IAuthenticationService} from "@/services/authentication/IAuthenticationService";
import {RideService} from "@/services/ride/RideService";
import {IRideService} from "@/services/ride/IRideService";

export default function RideContextProvider({children,authService} : {children : React.ReactElement[], authService: IAuthenticationService}) {

    const _rideService : IRideService = new RideService(authService)

    const contextValues : RideContextType = {
        rideService: _rideService
    }


    return <>
        <RideContext.Provider value={contextValues}>
            {children}
        </RideContext.Provider>
    </>
}