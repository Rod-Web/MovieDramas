import REACT from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";
import estilo from "./style.js";

export default function Header(){

    return(
        <View style = {estilo.viewHeader}>

            <TouchableOpacity >

                <Feather  name = "menu" size= {36} color= "#FFF" />

            </TouchableOpacity>

            <Text style = {estilo.textHeader}> Catalogo Movies</Text>
        </View>
    )
}