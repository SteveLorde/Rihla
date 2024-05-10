import {GlobalStyle} from "../styles/GlobalStyle"
import {SafeAreaView, TextInput, View, Text, StyleSheet, TouchableOpacity} from "react-native";
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


    async function Login(loginReq : LoginRequest) {
        const check = await authService.Login(loginReq)
        if (check) {
            router.navigate("/dashboard")
        }
        else {
            //to implement modal popup
        }
    }

    async function Register(registerReq : RegisterRequest) {
        const check = await authService.Register(registerReq)
        if (check) {
            router.navigate("/dashboard")
        }
        else {
            //to implement modal popup
        }
    }


    return (
        <>
            <View>
                {isToggleForm ? <View>
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
                    <TouchableOpacity style={GlobalStyle.formsubmit} onPress={loginformsubmit(Login)}></TouchableOpacity>
                </View> : <View>
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
                    <TouchableOpacity style={GlobalStyle.formsubmit} onPress={loginformsubmit(Login)}></TouchableOpacity>
                </View>}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    title: {

    },
    input: {

    }
})


