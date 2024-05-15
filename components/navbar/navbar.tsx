import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {GlobalStyle, ridenavicon, settingsnavicon} from "@/styles/GlobalStyle";
import RideNavIcon from "@/assets/UI/RideNavIcon.svg"
import SettingsNavIcon from "@/assets/UI/SettingsNavIcon.svg"

export default function Navbar() {
    return <>
        <View style={style.navbarcontainer}>
            <View style={style.navelementscontainer}>
                <TouchableOpacity style={style.navButton}>
                    <RideNavIcon height={100} width={100}></RideNavIcon>
                    <Text style={GlobalStyle.normalText}>Ride</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.navButton}>
                    <SettingsNavIcon height={100} width={100}></SettingsNavIcon>
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
        alignItems: "center"
    },
    icon: {
        height: 100,
        width: 100
    }
})