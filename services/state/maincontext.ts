import {createContext} from "react";
import {MainContextType} from "@/services/state/maincontexttype";
import {any} from "prop-types";

export const MainContext = createContext<MainContextType>({
    mapRef : {} as React.MutableRefObject<any>,
    SetMapRef : () => {}
})