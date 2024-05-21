import MapView, {LatLng, LongPressEvent, Marker, Polyline, Region} from "react-native-maps";
import {Dimensions} from "react-native";
import {useContext, useEffect, useState} from "react";
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
    const {OpenRidePopUp,CloseRidePopUp} = useContext(RideContext)
    const [routeCoords, setRouteCoords] = useState([])

    async function CreateDestination(touchEvent : LongPressEvent) {
        CloseRidePopUp()
        const {coordinate} = touchEvent.nativeEvent
        const newMarker : MapMarker = {
            coordinate: coordinate,
            title: 'Destination'
        }
        console.log("destination marker latitude is " + destinationMarker.coordinate.latitude)
        setDestinationMarker(newMarker)
        const destinationGeoLocation = {latitude: destinationMarker.coordinate.latitude, longitude: destinationMarker.coordinate.longitude} as GeoLocation
        await mapService.GetGeoCodeLocationName(destinationGeoLocation)
        const routeCoords = await GetRoute()
        // @ts-ignore
        const routes = routeCoords.map(coord => ({
            latitude: coord[1],
            longitude: coord[0],
        }));
        setRouteCoords(routes)
        OpenRidePopUp()
    }

    function MapDrag(event : Region) {

    }

    function MapDragDone(eventRegion : Region) {

    }

    async function GetRoute() {
        //console.log("GETTING ROUTE FOR USER LOCATION " + userLocation.latitude + "DESTINATION LOCATION " + destinationMarker.coordinate.latitude)
        if (destinationMarker.coordinate.latitude > 0) {
            const destinationLocation : GeoLocation = {
                latitudeDelta: 0,
                longitudeDelta: 0,
                latitude: destinationMarker.coordinate.latitude, longitude: destinationMarker.coordinate.longitude
            }
            return await mapService.Route(userLocation, destinationLocation)
        }
    }

    async function GetMapDrivers() {
        const mapDrivers = await mapService.GetDriversLocations()
        setDrivers(mapDrivers)
    }

    async function GetUserLocation() {
        const userLocationData = await mapService.GetCurrentUserLocation()
        console.log("current user location is " + userLocationData.latitude + " latitude " + userLocationData.longitude + " longtitude ")
        setUserLocation(userLocationData)
    }

    useEffect(() => {
        const getUserLocationInterval = setInterval(GetUserLocation, 5000)
        return () => clearInterval(getUserLocationInterval)
    }, []);


    return <>
        <MapView style={{height: screenHeight, width: screenWidth}} initialRegion={{latitude:userLocation.latitude , longitude:userLocation.longitude, latitudeDelta: 0, longitudeDelta: 0}}  showsUserLocation={true} followsUserLocation={true} onRegionChange={(event) => MapDrag(event)} onRegionChangeComplete={(event) => MapDragDone(event)} onLongPress={(event) => CreateDestination(event)}>
            {destinationMarker.coordinate.latitude > 0 ? <Marker coordinate={{latitude: destinationMarker.coordinate.latitude , longitude: destinationMarker.coordinate.longitude}}/> : null}
            {drivers.map( (driver: Driver) =>
                <Marker coordinate={{latitude: driver.location.latitude, longitude: driver.location.longitude}}/>
            )}
            {routeCoords.length > 0 ? <Polyline coordinates={routeCoords} strokeWidth={5} strokeColor={"#F53134"} /> : null}
        </MapView>
    </>
}

