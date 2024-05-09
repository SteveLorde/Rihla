import Navbar from "@/components/navbar/navbar";
import {Slot} from "expo-router";
import MainContextProvider from "@/services/state/maincontextprovider";
import * as Location from "expo-location"

export default function MainLayout() {

    return <>
        <MainContextProvider>
            <Slot/>
            <Navbar/>
        </MainContextProvider>
    </>
}