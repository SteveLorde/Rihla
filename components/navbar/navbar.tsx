import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ridenavicon, settingsnavicon} from "@/styles/GlobalStyle";


export default function Navbar() {
    return <>
        <View>
            <TouchableOpacity>
                <Image source={ridenavicon}/>
                <Text>Ride</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={settingsnavicon}/>
                <Text>Settings</Text>
            </TouchableOpacity>
        </View>
    </>
}


const style = StyleSheet.create({
    navbarcontainer: {
        backgroundColor: "#",
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
    }
})