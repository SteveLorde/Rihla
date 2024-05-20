import Navbar from "@/components/navbar/navbar";
import {Slot} from "expo-router";
import MainContextProvider from "@/services/state/maincontextprovider";
import RideContextProvider from "@/services/ridestate/ridecontextprovider";
import {useContext} from "react";
import {MainContext} from "@/services/state/maincontext";
import {KeyboardAvoidingView, Platform, SafeAreaView} from "react-native";


export default function MainLayout() {
    const {authService} = useContext(MainContext)

    return <>
            <MainContextProvider>
                <RideContextProvider authService={authService}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1,flexDirection: "column", alignItems: "center"}}>
                        <Slot/>
                        <Navbar/>
                    </KeyboardAvoidingView>
                </RideContextProvider>
            </MainContextProvider>

    </>
}
