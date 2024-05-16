import {
    Button,
    NativeSyntheticEvent,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TextInputChangeEventData, TouchableOpacity,
    View
} from "react-native";
import Navbar from "@/components/navbar/navbar";
import MapView from "react-native-maps";
import MapComponent from "@/components/map/mapComponent";
import {useContext, useState} from "react";
import {MainContext} from "@/services/state/maincontext";
import SearchIcon from "../../assets/UI/searchicon.svg"
import {RideContext} from "@/services/ridestate/ridecontext";
import RideRequestPopUp from "@/components/riderequestcard/RideRequestPopUp";

export default function Page() {
    const {mapService} = useContext(MainContext)
    const [queryName, setQueryName] = useState<string>("")
    const [queriedLocations, setQueriedLocations] = useState<any[]>([])
    const {rideRequested} = useContext(RideContext)

    function HandleSearchInputChange(e : NativeSyntheticEvent<TextInputChangeEventData>) {
        setQueryName(e.nativeEvent.text)
    }

    async function SearchLocations() {
        const queriedLocations = await mapService.GetGeoLocationByName(queryName)
    }

    return <>
        <View style={Style.view}>
            {rideRequested ? <View style={Style.riderequestpopup}>
                <RideRequestPopUp/>
            </View> : null}
            <View style={[Style.searchBlock, {zIndex: 99}]}>
                <TextInput style={Style.searchBar} placeholder={"Search Location... "} onChange={(e) => HandleSearchInputChange(e)} />
            </View>
            <MapComponent/>
        </View>
    </>
}

const Style = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    searchBlock: {
        backgroundColor: "#F53134",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderRadius: 25
    },
    searchBar: {
        color: "#ffffff",
        padding: 10,
        minWidth: 250,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2
    },
    riderequestpopup: {
        position: "absolute",
        top: 150
    }
})