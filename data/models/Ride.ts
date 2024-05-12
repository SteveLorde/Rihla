import {GeoLocation} from "./GeoLocation"
import {Driver} from "./Driver"

export interface Ride {
    source : GeoLocation
    destination : GeoLocation
    driver : Driver
}