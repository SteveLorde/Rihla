import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {GlobalStyle, ridenavicon, settingsnavicon} from "@/styles/GlobalStyle";
import CarIcon from "@/assets/UI/CarIcon.svg"
import SettingsNavIcon from "@/assets/UI/SettingsNavIcon.svg"
import { router } from 'expo-router';
import {RouteToPage} from "@/services/PageRouting";

export default function Navbar() {

    return <>
        <View style={style.navbarcontainer}>
            <View style={style.navelementscontainer}>
                <TouchableOpacity style={style.navButton} onPress={() => RouteToPage(1)}>
                    <CarIcon height={30} width={30}/>
                    <Text style={GlobalStyle.normalText}>Ride</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.navButton} onPress={() => RouteToPage(2)}>
                    <SettingsNavIcon height={30} width={30}/>
                    <Text style={GlobalStyle.normalText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
}


const style = StyleSheet.create({
    navbarcontainer: {
        backgroundColor: "#F53134",
        flexDirection: "column",
        alignItems: "center",
        padding: 20
    },
    navelementscontainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    navButton: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        gap: 14
    },
    icon: {
        height: 100,
        width: 100
    }
})