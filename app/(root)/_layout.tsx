import Navbar from "@/components/navbar/navbar";
import {Slot} from "expo-router";
import MainContextProvider from "@/services/state/maincontextprovider";
import * as Location from "expo-location"
import RideContextProvider from "@/services/ridestate/ridecontextprovider";
import {useContext} from "react";
import {MainContext} from "@/services/state/maincontext";

export default function MainLayout() {
    const {authService} = useContext(MainContext)

    return <>
        <MainContextProvider>
            <RideContextProvider authService={authService}>
                <Slot/>
                <Navbar/>
            </RideContextProvider>
        </MainContextProvider>
    </>
}