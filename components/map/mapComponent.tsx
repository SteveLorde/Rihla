import MapView, {LatLng, LongPressEvent, Marker, Polyline, Region} from "react-native-maps";
import {StyleSheet, Dimensions} from "react-native";
import {useContext, useEffect, useRef, useState} from "react";
import {MainContext} from "@/services/state/maincontext";
import {GeoLocation} from "@/data/models/GeoLocation"
import {Driver} from "@/data/models/Driver";
import {RideContext} from "@/services/ridestate/ridecontext";

//THIS MAP ENTIRE MAP COMPONENT IS CONSIDERED A PLACEHOLDER PRESENTATION

interface MapMarker {
    coordinate : LatLng,
    title : string
}

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default function MapComponent() {
    const [destinationMarker, setDestinationMarker] = useState<MapMarker>({title: "destination", coordinate: {latitude: 0, longitude: 0}})
    const [drivers, setDrivers] = useState<Driver[]>([])
    const [rideDriver, setRideDriver] = useState<Driver>({} as Driver)
    const [userLocation, setUserLocation] = useState<GeoLocation>({longitude: 0, latitude: 0, latitudeDelta: 0, longitudeDelta: 0})
    const {mapService} = useContext(MainContext)
    const {RideRequested} = useContext(RideContext)
    const [routeCoords, setRouteCoords] = useState<LatLng[]>([])

    async function CreateDestination(touchEvent : LongPressEvent) {
        const {coordinate} = touchEvent.nativeEvent
        const newMarker : MapMarker = {
            coordinate: coordinate,
            title: 'Destination'
        }
        setDestinationMarker(newMarker)
        await GetRoute()
        RideRequested()
    }

    function MapDrag(event : Region) {

    }

    function MapDragDone(eventRegion : Region) {

    }

    async function GetRoute() {
        if (destinationMarker.coordinate.latitude !== 0) {
            const destinationLocation : GeoLocation = {latitude: destinationMarker.coordinate.latitude, longitude: destinationMarker.coordinate.longitude} as GeoLocation
            const routeObject = await mapService.Route(userLocation,destinationLocation)
            console.log(routeObject)

        }
    }

    async function GetMapDrivers() {
        const mapDrivers = await mapService.GetDriversLocations()
        setDrivers(mapDrivers)
    }

    async function GetUserLocation() {
        const userLocationData = await mapService.GetCurrentUserLocation()
        setUserLocation(userLocationData)
    }

    useEffect(() => {
        const getUserLocationInterval = setInterval(GetUserLocation, 1000)
        return () => clearInterval(getUserLocationInterval)
    }, []);

    return <>
        <MapView style={{height: screenHeight, width: screenWidth}} showsUserLocation={true} followsUserLocation={true} onRegionChange={(event) => MapDrag(event)} onRegionChangeComplete={(event) => MapDragDone(event)} onLongPress={(event) => CreateDestination(event)}>
            <Marker coordinate={{latitude: userLocation.latitude, longitude: userLocation.longitude}} />
            {destinationMarker.coordinate.latitude > 0 ? <Marker coordinate={{latitude: destinationMarker.coordinate.latitude , longitude: destinationMarker.coordinate.longitude}}/> : null}
            {drivers.map( (driver: Driver) =>
                <Marker coordinate={{latitude: driver.location.latitude, longitude: driver.location.longitude}}/>
            )}
            <Polyline coordinates={routeCoords} />
        </MapView>
    </>
}

