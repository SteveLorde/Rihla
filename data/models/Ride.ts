import {GeoLocation} from "./GeoLocation"

export interface Ride {
    source : GeoLocation
    destination : GeoLocation
    driver : Driver
    duration : string //THINKING ABOUT DATE OBJECT
}