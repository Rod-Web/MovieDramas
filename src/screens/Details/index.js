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

import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 


export default function Detalhes() {
    const routes   = useRoute()


  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>{routes.params.titulo}</Text>
        <Image style={styles.imagem} source={{ uri: routes.params.imagem }} />
        <View style={{alignItems:'center'}}>
          <Stars
            default={routes.params.nota}
            count={5}
            half={true}
            starSize={70}
            disabled={true}  // impede que o usuário interaja
            fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
          />

        </View>
 
        <Text style={styles.nota}>{routes.params.nota}/5</Text>
        <Text style={styles.descricao}>Descrição: {routes.params.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#f0f0f5",
  },

  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
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
  descricao: {
    fontSize: 16,
    color: "#666",
  },
});
