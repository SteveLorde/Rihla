import MapView, {LatLng, LongPressEvent, Region} from "react-native-maps";
import {StyleSheet} from "react-native";
import {useRef, useState} from "react";
import * as Location from 'expo-location';

//THIS MAP ENTIRE MAP COMPONENT IS CONSIDERED A PLACEHOLDER PRESENTATION

interface MapMarker {
    coordinate : LatLng,
    title : string
}

export default function Map() {
    //const [markers, setMarkers] = useState<MapMarker[]>([])
    const [destinationMarker, setDestinationMarker] = useState<MapMarker>()

    const mapRef = useRef(null)

    function TouchMark(touchEvent : LongPressEvent) {
        const {coordinate} = touchEvent.nativeEvent
        const newMarker : MapMarker = {
            coordinate: coordinate,
            title: 'Destination'
        }
        setDestinationMarker(newMarker)
    }

    function MapDrag(event : Region) {

    }

    function MapDragDone(eventRegion : Region) {

    }


    return <>
        <MapView ref={mapRef} style={mapElementStyle.mapview} showsUserLocation={true} onRegionChange={(event) => MapDrag(event)} onRegionChangeComplete={(event) => MapDragDone(event)} onLongPress={(event) => TouchMark(event)}  />
    </>
}


const mapElementStyle = StyleSheet.create({
    mapview: {

    }
})