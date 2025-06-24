/*
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Detalhes(){
    
    const route = useRoute()
    return(
        <View>
            <Text  style={styles.titulo}>{route.params.titulo} </Text>
            <Image style={styles.images} source ={{uri: route.params.imagem}} />
            <Text  style={styles.notas}> Nota: {route.params.nota}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    images:{
        width: '50%',
        height:170,
        borderRadius: 8
     
    }
})
    */




import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Detalhes() {
    const routes   = useRoute()


  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>{routes.params.titulo}</Text>
        <Image style={styles.imagem} source={{ uri: routes.params.imagem }} />
        <Text style={styles.nota}>Nota: {routes.params.nota}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#f0f0f5",
  },

  imagem: {
    width: "50%",
    height: 250,
    borderRadius: 12,
    marginBottom: 12,
  },
  titulo: {
    fontFamily: 'bold', 
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  nota: {
    fontSize: 16,
    color: "#666",
  },
});
