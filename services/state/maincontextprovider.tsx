import {MainContext} from "@/services/state/maincontext";
import {MainContextType} from "@/services/state/maincontexttype";
import {MutableRefObject, useState} from "react";
import {AuthenticationService} from "@/services/authentication/AuthenticationService";
import {IAuthenticationService} from "@/services/authentication/IAuthenticationService";
import {IMapService} from "@/services/map/IMapService";
import {MapService} from "@/services/map/MapService";

export default function MainContextProvider({children} : {children : React.ReactElement}) {
    const _authService: IAuthenticationService = new AuthenticationService();
    const _mapService: IMapService = new MapService();

    const contextValues : MainContextType = {
        mapService: _mapService,
        authService: _authService
    }

    return <>
        <MainContext.Provider value={contextValues}>
            {children}
        </MainContext.Provider>
    </>
}