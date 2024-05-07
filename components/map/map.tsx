import MapView from "react-native-maps";
import {StyleSheet} from "react-native";
import {useRef} from "react";

export default function Map() {

    const mapRef = useRef(null)

    return <>
        <MapView ref={mapRef} style={mapElementStyle.mapview}  />
    </>
}


const mapElementStyle = StyleSheet.create({
    mapview: {

    }
})