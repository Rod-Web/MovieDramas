import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

export default function CardMoviesSearch({titulo, imagem, nota, descricao}) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.containerMovie} onPress={()=> navigation.navigate('Detalhes', {titulo, imagem, nota, descricao})} >
                <Image style={styles.images} source={{uri: imagem}} />
                <Text style={styles.titulo}> {titulo} </Text>
                <Text style={styles.textNota}>Nota: {nota} </Text>
            </TouchableOpacity>

        </View>




    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    containerMovie:{    
        backgroundColor:'black',
        width:'100%',
        height: '100%',
        paddingTop:20,
        paddingBottom:16,
        marginBottom: 15,
        paddingRight:16,
    },
    
    titulo:{
        color:'#fff',
        fontSize:12,
        paddingTop:8,
    },

    textNota:{
        fontSize:10,
        color: '#fff',
        paddingLeft:4,
    },
     
    
    images:{
        width: '100%',
        height:170,
        borderRadius: 8
    
    }
})