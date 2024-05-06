import {MainContext} from "@/services/state/maincontext";
import {MainContextType} from "@/services/state/maincontexttype";

export default function MainContextProvider({children} : {children : React.ReactElement[]}) {


    const contextValues : MainContextType = {

    }

    return <>
        <MainContext.Provider value={contextValues}>
            {children}
        </MainContext.Provider>
    </>
}