import {StyleSheet, View} from "react-native";
import Navbar from "@/components/navbar/navbar";
import MapView from "react-native-maps";
import Map from "@/components/map/map";

export default function Page() {


    return <>
        <View>
            <Map/>
        </View>
    </>
}

const Style = StyleSheet.create({

})