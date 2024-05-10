import {Location} from "./Location"

export interface Ride {
    source : Location
    destination : Location
    driver : Driver
    duration : string //THINKING ABOUT DATE OBJECT
}