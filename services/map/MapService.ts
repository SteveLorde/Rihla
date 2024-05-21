import {Driver} from "@/data/models/Driver";
import {GeoLocation} from "@/data/models/GeoLocation";
import {IMapService} from "@/services/map/IMapService";
import * as ExpoLocation from "expo-location";
import axios from "axios";

export class MapService implements IMapService {
    constructor() {
    }

    selectedDestinationName = "destination name"
    selectedDestinationDistance = 0

    currentUserLocation: GeoLocation = {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
    };

    async GetCurrentUserLocation() {
        const { status } = await ExpoLocation.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            let nullLocation : GeoLocation = {latitude:0, longitude: 0, longitudeDelta: 0, latitudeDelta: 0}
            return nullLocation
        }
        else {
            const expoLocationOptions : ExpoLocation.LocationOptions = {accuracy: 1}
            const userLocation = await ExpoLocation.getCurrentPositionAsync(expoLocationOptions)
            const {latitude, longitude, altitude} = userLocation.coords
            this.currentUserLocation = {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0,
                longitudeDelta: 0
            }
        }
        return this.currentUserLocation
    }

    async GetDriversLocations(): Promise<Driver[]> {
        throw new Error("Method not implemented.");
    }

    async GetGeoLocationByName(query : string) {
        const coordinates = await axios.get(`https://nominatim.openstreetmap.org/search?addressdetails=1&q=${query}&format=jsonv2&limit=1`).then(res => res.data)
        //REPLACE PROPERTIES WITH COORDS VALUES
        let geoLocation : GeoLocation = {
            latitude: 0,
            longitude: 0
        } as GeoLocation

    }

    async GetGeoCodeLocationName(locationReq : GeoLocation) : Promise<any> {
        const geoObject = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${locationReq.latitude}&lon=${locationReq.longitude}`).then(res => res.data)
        // @ts-ignore
        this.selectedDestinationName = geoObject.address.road
    }

    async Route(startLocation : GeoLocation, destinationLocation: GeoLocation ): Promise<any> {
        const routeResponse = await axios.get(`https://router.project-osrm.org/route/v1/driving/${startLocation.longitude},${startLocation.latitude};${destinationLocation.longitude},${destinationLocation.latitude}?overview=full&geometries=geojson`).then(res => res.data)
        this.selectedDestinationDistance = routeResponse["routes"][0]["distance"]
        //STRUCTURE iS [LONGTITUDE,LATITUDE]
        return routeResponse["routes"][0]["geometry"]["coordinates"]
    }



}