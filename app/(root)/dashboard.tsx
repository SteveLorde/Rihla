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

export default function Page() {
    const {mapService} = useContext(MainContext)
    const [queryName, setQueryName] = useState<string>("")
    const [queriedLocations, setQueriedLocations] = useState<any[]>([])

    function HandleSearchInputChange(e : NativeSyntheticEvent<TextInputChangeEventData>) {
        setQueryName(e.nativeEvent.text)
    }


    async function SearchLocations() {
        const queriedLocations = await mapService.GetGeoLocationByName(queryName)
    }

    return <>
        <View style={Style.view}>
            <View style={Style.searchBlock}>
                <TextInput style={Style.searchBar} onChange={(e) => HandleSearchInputChange(e)} />
                <TouchableOpacity onPress={() => SearchLocations()}>
                    <SearchIcon height={100} width={100}></SearchIcon>
                </TouchableOpacity>
            </View>
            <MapComponent/>
        </View>
    </>
}

const Style = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    searchBlock: {
      margin: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    searchBar: {
        backgroundColor: "#F53134",
        width: 300,
        padding: 5
    }
})