import {StyleSheet, View} from "react-native";
import Navbar from "@/components/navbar/navbar";
import MapView from "react-native-maps";
import MapComponent from "@/components/map/mapComponent";

export default function Page() {


    return <>
        <View>
            <MapComponent/>
        </View>
    </>
}

const Style = StyleSheet.create({

})