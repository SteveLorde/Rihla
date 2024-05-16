import {useContext, useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {RideContext} from "@/services/ridestate/ridecontext";


export default function RideRequestPopUp() {
    const [destinationName, setDestinationName] = useState<string>("")
    const [fare,setFare] = useState<number>(0)
    const {rideService} = useContext(RideContext)

    useEffect(() => {
        setFare(rideService.fare)
        setDestinationName(rideService.destinationName)
    }, []);

    return <>
        <View style={style.card}>
            <Text style={style.destinationName} >{destinationName}</Text>
            <View style={style.rideDetails} >
                <Text>{fare}</Text>
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