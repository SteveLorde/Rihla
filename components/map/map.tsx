import MapView, {LatLng, LongPressEvent, Marker, Region} from "react-native-maps";
import {StyleSheet} from "react-native";
import {useEffect, useRef, useState} from "react";
import * as Location from 'expo-location';

//THIS MAP ENTIRE MAP COMPONENT IS CONSIDERED A PLACEHOLDER PRESENTATION

interface MapMarker {
    coordinate : LatLng,
    title : string
}

export default function Map() {
    //const [markers, setMarkers] = useState<MapMarker[]>([])
    const [destinationMarker, setDestinationMarker] = useState<MapMarker>()

    let userRegion = {
        latitude : 0,
        longtitude : 0
    }

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

    async function GetCurrentUserLocation() {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return
        }

        const userLocation = await Location.getCurrentPositionAsync()
        const {latitude, longitude, altitude} = userLocation.coords
        userRegion = {
            latitude: latitude,
            longtitude: longitude
        }
    }

    useEffect(() => {
        GetCurrentUserLocation()
    }, []);

    return <>
        <MapView ref={mapRef} style={mapElementStyle.mapview} showsUserLocation={true} followsUserLocation={true} onRegionChange={(event) => MapDrag(event)} onRegionChangeComplete={(event) => MapDragDone(event)} onLongPress={(event) => TouchMark(event)}>
            <Marker coordinate={{latitude: userRegion.latitude, longitude: userRegion.longtitude}} />
        </MapView>
    </>
}


const mapElementStyle = StyleSheet.create({
    mapview: {

    }
})