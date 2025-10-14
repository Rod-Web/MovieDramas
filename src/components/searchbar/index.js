import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { TextInput, View, TouchableOpacity } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import styles from './style'


export default function Search(){

    const navigation = useNavigation()

    const [busca, setBusca] = useState();

    function testBusca() {
        
        console.log(busca)
        
    }

    return(

        <View style= {styles.containerSearch}> 

            

                <TextInput   onChangeText={(text)  => {setBusca(text)}} style= {styles.inputSearch} placeholder="Digite o filme que deseja buscar"></TextInput>
                

                <TouchableOpacity onPress={()=> navigation.navigate('Search', {busca})}>

                   <EvilIcons name="search" size={34} color="black" style={{ marginRight:12 }}/>

                </TouchableOpacity>

        </View>

        

    );


}