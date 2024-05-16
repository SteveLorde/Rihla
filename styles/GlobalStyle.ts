import {StyleSheet} from "react-native";

export const logoImage = require('../assets/UI/Logo.png')
export const ridenavicon = require('../assets/UI/RideNavIcon.svg')
export const settingsnavicon = require('../assets/UI/SettingsNavIcon.svg')

export const GlobalStyle = StyleSheet.create({
    page: {
        flex: 1,
      flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        margin: 20
    },
    btn : {
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#F53134",
        alignItems: "center"
    },
    forminput: {
        color: "#F53134",
        padding: 8,
        minWidth: 250,
        borderBottomColor: '#F53134',
        borderBottomWidth: 2
    },
    formsubmit: {
        marginTop: 50,
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#F53134",
        alignItems: "center"
    },
    formerror: {

    },
    normalText: {
        color: "white"
    }
})