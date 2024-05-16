    import {GlobalStyle, logoImage} from "../styles/GlobalStyle"
import {SafeAreaView, TextInput, View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {LoginRequest} from "@/data/models/LoginRequest";
import {RegisterRequest} from "@/data/models/RegisterRequest";
import {MainContext} from "@/services/state/maincontext";
import { router } from 'expo-router';

export default function Page() {
    const { control : loginform, handleSubmit : loginformsubmit, formState: { errors : loginformerrors } } = useForm<LoginRequest>();
    const { control : registerform, handleSubmit : registerformsubmit, formState: { errors : registerformerrors } } = useForm<RegisterRequest>();
    const [isToggleForm, setToggleForm] = useState(false)
    const {authService} = useContext(MainContext)


    function ToggleForm() {
        setToggleForm(!isToggleForm)
    }


    async function Login(loginReq : LoginRequest) {
        const check = await authService.Login(loginReq)
        if (check) {
            router.navigate("/ride-page")
        }
        else {
            //to implement modal popup
        }
    }

    function LoginTest() {
        router.navigate("/ride-page")
    }

    async function Register(registerReq : RegisterRequest) {
        const check = await authService.Register(registerReq)
        if (check) {
            router.navigate("/ride-page")
        }
        else {
            //to implement modal popup
        }
    }


    return (
        <>
            <View style={GlobalStyle.page}>

                {!isToggleForm ? <View style={styles.form}>
                    <TouchableOpacity style={GlobalStyle.btn} onPress={() => ToggleForm()}>
                        <Text style={{color: "white"}}>Not Registered?</Text>
                    </TouchableOpacity>
                    <Controller control={loginform} rules={{required : true}} render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={GlobalStyle.forminput}
                            placeholder="Email..."
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )} name={"email"}/>
                    {loginformerrors.email && <Text style={GlobalStyle.formerror}>Email is required.</Text>}
                    <Controller control={loginform} rules={{required : true}} render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={GlobalStyle.forminput}
                            placeholder="Password..."
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )} name={"password"}/>
                    {loginformerrors.password && <Text style={GlobalStyle.formerror}>Password is required.</Text>}
                    {/*USING LOGIN TEST FUNCTION FOR NOW*/}
                    <TouchableOpacity style={GlobalStyle.formsubmit} onPress={() => LoginTest()}>
                        <Text style={{color: "white"}}>Login</Text>
                    </TouchableOpacity>
                </View> : <View style={styles.form}>
                    <TouchableOpacity style={GlobalStyle.btn} onPress={() => ToggleForm()}>
                        <Text style={{color: "white"}}>Login?</Text>
                    </TouchableOpacity>
                    <Controller control={registerform} rules={{required : true}} render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={GlobalStyle.forminput}
                            placeholder="Email..."
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )} name={"email"}/>
                    {registerformerrors.email && <Text style={GlobalStyle.formerror}>Email is required.</Text>}
                    <Controller control={registerform} rules={{required : true}} render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={GlobalStyle.forminput}
                            placeholder="Password..."
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )} name={"password"}/>
                    {registerformerrors.password && <Text style={GlobalStyle.formerror}>Password is required.</Text>}
                    <TouchableOpacity style={GlobalStyle.formsubmit} onPress={registerformsubmit(Register)}>
                        <Text style={{color: "white"}}>Register</Text>
                    </TouchableOpacity>
                </View>}
                <Image style={styles.logoImage} source={logoImage} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    form: {
      flex: 1,
      flexDirection: "column",
      alignContent: "center",
        justifyContent: "center",
        gap: 10
    },
    title: {

    },
    forminput: {

    },
    logoImage: {
        height: 80,
        width: 80,
    },
})


