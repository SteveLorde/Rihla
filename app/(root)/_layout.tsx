import Navbar from "@/components/navbar/navbar";
import {Slot} from "expo-router";

export default function MainLayout() {
    return <>
        <Slot/>
        <Navbar/>
    </>
}