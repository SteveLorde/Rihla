import {createContext} from "react";
import {MainContextType} from "@/services/state/maincontexttype";
import {any} from "prop-types";
import {AuthenticationService} from "@/services/authentication/AuthenticationService";
import {MapService} from "@/services/map/MapService";

export const MainContext = createContext<MainContextType>({
    mapRef : {} as React.MutableRefObject<any>,
    SetMapRef : () => {},
    mapService: {} as MapService,
    authService: {} as AuthenticationService
})