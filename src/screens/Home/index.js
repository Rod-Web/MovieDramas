import {View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import Header from '../..//components/header/index.js'
import Search from "../../components/searchbar/index.js";
import CardMovies from "../../components/cardMovies/index.js";
import BannerFilmes from "../../components/bannerFilmes/index.js";
import data from "../../data/database.js"

export default function Home(){
    return(
  <View style = {styles.container}>

    <Header></Header>
    <Search></Search>
    <BannerFilmes></BannerFilmes>

    <View style={{width: '90%'}}>

      <FlatList
      data={data} // busca 
      horizontal = {true}
      keyExtractor={(item) => item.id}

      renderItem={({item}) => (
       
        <CardMovies titulo={item.nome} imagem={item.imagem} nota={item.nota} descricao={item.descricao}></CardMovies>
      )}
      />

    </View>
    
  </View>

    )

}
const styles = StyleSheet.create({

  container:{
    display:'flex',
    alignItems:'center',
    backgroundColor:'black',
    
    flex:1
  }


})