import {Button, NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View} from "react-native";
import Navbar from "@/components/navbar/navbar";
import MapView from "react-native-maps";
import MapComponent from "@/components/map/mapComponent";
import {useContext, useState} from "react";
import {MainContext} from "@/services/state/maincontext";

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
        <View>
            <View style={Style.searchBlock}>
                <TextInput style={Style.searchBar} onChange={(e) => HandleSearchInputChange(e)} />
                <Button title={""} onPress={() => SearchLocations()}/>
            </View>
            <MapComponent/>
        </View>
    </>
}

const Style = StyleSheet.create({
    searchBlock: {
      margin: 5
    },
    searchBar: {
        backgroundColor: "",
        padding: 5
    }
})