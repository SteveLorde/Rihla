import {useContext, useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, Easing} from "react-native";
import {RideContext} from "@/services/ridestate/ridecontext";
import CarIconAlt from "@/assets/UI/CarIconAlt.svg"
import {MainContext} from "@/services/state/maincontext";
import {GlobalStyle} from "@/styles/GlobalStyle";
import { Animated } from 'react-native';

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width


export default function RideRequestPopUp() {
    const [destinationName, setDestinationName] = useState<string>("Destination Name")
    const [fare,setFare] = useState<number>(0)
    const {mapService} = useContext(MainContext)
    const {rideService, CloseRidePopUp} = useContext(RideContext)

    const transitionDownToUp = new Animated.Value(screenHeight);

    Animated.timing(transitionDownToUp, {
        toValue: screenHeight / 2,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
    }).start()

    function CancelRequest() {
        rideService.CancelRide()
        CloseRidePopUp()
    }

    function CallRide() {

    }

    useEffect(() => {
        rideService.CalculateFare(mapService.selectedDestinationDistance)
        setFare(rideService.rideFare)
        setDestinationName(mapService.selectedDestinationName)
    }, []);

    return <>
        <Animated.View style={[style.card , {zIndex: 99, top: transitionDownToUp}]}>
            <TouchableOpacity onPress={() => CancelRequest()}>
                <Text style={{color: 'white', padding: 10, paddingLeft: 25, paddingRight: 25, backgroundColor: 'red', borderRadius: 100}}>X</Text>
            </TouchableOpacity>
            <Text style={style.destinationName}>{destinationName}</Text>
            <View style={style.rideDetails}>
                <View style={style.rideDetailRow}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 25}}>
                        <CarIconAlt width={75} height={75}></CarIconAlt>
                        <Text style={{color: "black", fontWeight: "bold", fontSize: 24}}>Comfort</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>{fare} Egp</Text>
                </View>
            </View>
            <TouchableOpacity style={[GlobalStyle.btn, {marginTop: 55}]} onPress={() => CallRide()}>
                <Text style={{color: 'white'}}>Call Ride</Text>
            </TouchableOpacity>
        </Animated.View>
    </>
}

const style= StyleSheet.create({
    card: {
        width: '100%',
        maxWidth: screenWidth * 0.9,
        flex: 1,
        position: "absolute",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 20
    },
    destinationName: {
        marginTop: 25,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24
    },
    rideDetails: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        gap: 100
    },
    rideDetailRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 75
    }
})