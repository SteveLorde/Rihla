import {
    Button,
    NativeSyntheticEvent,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TextInputChangeEventData, TouchableOpacity, TouchableWithoutFeedback,
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
    const {showRidePopUp, CloseRidePopUp} = useContext(RideContext)

    function HandleSearchInputChange(e : NativeSyntheticEvent<TextInputChangeEventData>) {
        setQueryName(e.nativeEvent.text)
    }

    async function SearchLocations() {
        const queriedLocations = await mapService.GetGeoLocationByName(queryName)
    }

    function TouchOutsideRidePopUp() {
        setTimeout(() => CloseRidePopUp(),500)
    }

    return <>
        <View style={Style.view}>
            <TouchableWithoutFeedback onPress={() => TouchOutsideRidePopUp()}>
                <View>
                    <View style={[Style.searchBlock, {zIndex: 99}]}>
                        <TextInput style={[Style.searchBar, {zIndex: 99}]} placeholder={"Search Location... "} placeholderTextColor={"#fff"} onChange={(e) => HandleSearchInputChange(e)} />
                    </View>
                    <MapComponent/>
                </View>
            </TouchableWithoutFeedback>
            {showRidePopUp && <RideRequestPopUp/>}
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
        position: "absolute",
        top: 10,
        backgroundColor: "#F53134",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 10,
        borderRadius: 100
    },
    searchBar: {
        color: "#ffffff",
        padding: 5,
        minWidth: 300,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2
    },
    riderequestpopup: {
        flex: 1,
        flexDirection: "column"
    }
})