import MapView from "react-native-maps";
import {StyleSheet} from "react-native";
import {useRef} from "react";

//THIS MAP ENTIRE MAP COMPONENT IS CONSIDERED A PLACEHOLDER PRESENTATION

export default function Map() {

    const mapRef = useRef(null)

    return <>
        <MapView ref={mapRef} style={mapElementStyle.mapview} showsUserLocation={true}  />
    </>
}


const mapElementStyle = StyleSheet.create({
    mapview: {

    }
})