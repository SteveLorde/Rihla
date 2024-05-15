import Navbar from "@/components/navbar/navbar";
import {Slot} from "expo-router";
import MainContextProvider from "@/services/state/maincontextprovider";
import RideContextProvider from "@/services/ridestate/ridecontextprovider";
import {useContext} from "react";
import {MainContext} from "@/services/state/maincontext";
import {SafeAreaView} from "react-native";


export default function MainLayout() {
    const {authService} = useContext(MainContext)

    return <>
            <MainContextProvider>
                <RideContextProvider authService={authService}>
                    <SafeAreaView style={{flex:1, flexDirection: "column", alignItems: "center"}}>
                        <Slot/>
                        <Navbar/>
                    </SafeAreaView>
                </RideContextProvider>
            </MainContextProvider>

    </>
}
