import {MainContext} from "@/services/state/maincontext";
import {MainContextType} from "@/services/state/maincontexttype";
import {MutableRefObject, useState} from "react";

export default function MainContextProvider({children} : {children : React.ReactElement[]}) {

    const [currentMapRef, setMapRef] = useState<MutableRefObject<any>>({} as MutableRefObject<any>)

    function SetMapRef(ref : MutableRefObject<any>) {
        setMapRef(ref)
    }

    const contextValues : MainContextType = {
        mapRef : currentMapRef,
        SetMapRef : SetMapRef
    }


    return <>
        <MainContext.Provider value={contextValues}>
            {children}
        </MainContext.Provider>
    </>
}