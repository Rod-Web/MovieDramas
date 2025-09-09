import {View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import Header from '../..//components/header/index.js'
import Search from "../../components/searchbar/index.js";
import CardMovies from "../../components/cardMovies/index.js";
import BannerFilmes from "../../components/bannerFilmes/index.js";
import data from "../../data/database.js"

import { useState, useEffect } from "react";




export default function Home(){
   
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
  
      async function buscarFilmes(){
          const url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGE0ZjZhMWQyOWZmNWE2ZDNjNjg4YjYzNzEzYmYxMCIsIm5iZiI6MTc1NzQzNTA0OS4xMjEsInN1YiI6IjY4YzA1NGE5NWMxZTQ5NjdlYTA2YWM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z8uDynCCP5mgkbmw-0rOY4LY_lM9TNPjUI84TiIbt9M'
            }
          };
  
          const response = await fetch(url,options);
          const data = await response.json();
  
          console.log(data);
          setMovies(data.results)
      }
  
      buscarFilmes();
      
  }, [] )


  
  
  return(
  <View style = {styles.container}>

    <Header></Header>
    <Search></Search>
    <BannerFilmes></BannerFilmes>

    <View style={{width: '90%'}}>

      <FlatList
      data={movies} // busca 
      horizontal = {true}
      keyExtractor={(item) => item.id}

      renderItem={({item}) => (
       
        <CardMovies titulo={item.title} imagem={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} nota={item.vote_average.toFixed(2)} descricao={item.overview}></CardMovies>
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