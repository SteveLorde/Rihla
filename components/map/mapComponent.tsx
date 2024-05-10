import MapView, {LatLng, LongPressEvent, Marker, Region} from "react-native-maps";
import {StyleSheet} from "react-native";
import {useContext, useEffect, useRef, useState} from "react";
import * as Location from 'expo-location';
import {MainContext} from "@/services/state/maincontext";

//THIS MAP ENTIRE MAP COMPONENT IS CONSIDERED A PLACEHOLDER PRESENTATION

interface MapMarker {
    coordinate : LatLng,
    title : string
}

export default function MapComponent() {
    //const [markers, setMarkers] = useState<MapMarker[]>([])
    const [destinationMarker, setDestinationMarker] = useState<MapMarker>()
    const {mapService} = useContext(MainContext)

    let userRegion = {
        latitude : 0,
        longtitude : 0
    }

    const mapRef = useRef(null)

    function CreateDestination(touchEvent : LongPressEvent) {
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

    async function GetUserLocation() {
        const userLocationData = await mapService.GetCurrentUserLocation()
        userRegion = {
            latitude: userLocationData.latitude,
            longtitude: userLocationData.longitude
        }
    }

    useEffect(() => {
        GetUserLocation()
    }, [GetUserLocation]);

    return <>
        <MapView ref={mapRef} style={mapElementStyle.mapview} showsUserLocation={true} followsUserLocation={true} onRegionChange={(event) => MapDrag(event)} onRegionChangeComplete={(event) => MapDragDone(event)} onLongPress={(event) => CreateDestination(event)}>
            <Marker coordinate={{latitude: userRegion.latitude, longitude: userRegion.longtitude}} />
        </MapView>
    </>
}


const mapElementStyle = StyleSheet.create({
    mapview: {

    }
})