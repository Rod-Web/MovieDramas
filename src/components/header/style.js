import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({

    viewHeader:{
        flexDirection: "row",
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        marginLeft: 0
    },

    textHeader: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        marginRight: 0  
    }
})
 
export default estilo;