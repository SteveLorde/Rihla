import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {GlobalStyle} from "@/styles/GlobalStyle";
import { router } from 'expo-router';
import {MainContext} from "@/services/state/maincontext";
import {useContext} from "react";

export default function Page() {
    const {authService} = useContext(MainContext)

    function LogOut() {
        const result = authService.LogOut()
        if (result) {
            router.navigate("/")
        }
    }

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
        alignItems: "center",
        justifyContent: "center"
    }
})