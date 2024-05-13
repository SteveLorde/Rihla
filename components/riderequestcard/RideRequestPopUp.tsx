import {useState} from "react";
import {StyleSheet, Text, View} from "react-native";

export default function RideRequestPopUp() {
    const [destinationName, setDestinationName] = useState<string>("")




    return <>
        <View style={style.card}>
            <Text style={style.destinationName} >{destinationName}</Text>
            <View style={style.rideDetails} >

            </View>
        </View>
    </>
}

const style = StyleSheet.create({
    card: {
        flexDirection: "column"
    },
    destinationName: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24
    },
    rideDetails: {
        flexDirection: "row",

    }
})