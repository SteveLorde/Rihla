import {MutableRefObject} from "react";

export interface MainContextType {
    mapRef : MutableRefObject<any>
    SetMapRef: (ref : MutableRefObject<any>) => void
}