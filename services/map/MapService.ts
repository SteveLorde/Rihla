import { Location } from "@/data/models/Location";
import {IMapService} from "@/services/map/IMapService";
import * as ExpoLocation from "expo-location";

export class MapService implements IMapService {
    constructor() {
    }

    currentUserLocation: Location = {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
    };

    async GetCurrentUserLocation() {
        const { status } = await ExpoLocation.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            let nullLocation : Location = {latitude:0, longitude: 0, longitudeDelta: 0, latitudeDelta: 0}
            return nullLocation
        }
        const userLocation = await ExpoLocation.getCurrentPositionAsync()
        const {latitude, longitude, altitude} = userLocation.coords
        this.currentUserLocation = {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0,
            longitudeDelta: 0
        }
        return this.currentUserLocation
    }



}