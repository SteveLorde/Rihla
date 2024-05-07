import Navbar from "@/components/navbar/navbar";
import {Slot} from "expo-router";
import MainContextProvider from "@/services/state/maincontextprovider";

export default function MainLayout() {
    return <>
        <MainContextProvider>
            <Slot/>
            <Navbar/>
        </MainContextProvider>
    </>
}