import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {GlobalStyle} from "@/styles/GlobalStyle";

export default function Page() {



    return <>
        <View style={style.page}>

            <TouchableOpacity style={GlobalStyle.btn}>
                <Text style={{color: "white"}}>Logout</Text>
            </TouchableOpacity>
        </View>
    </>
}

const style = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    }
})