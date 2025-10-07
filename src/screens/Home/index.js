import {View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import Header from '../..//components/header/index.js'
import Search from "../../components/searchbar/index.js";
import CardMovies from "../../components/cardMovies/index.js";
import BannerFilmes from "../../components/bannerFilmes/index.js";
import data from "../../data/database.js"

import { useState, useEffect } from "react";




export default function Home(){
   
  const [movies,setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);

  useEffect(()=>{
  
    async function buscarFilmes(){
        const url = 'https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTY1ODBkZjlkMDRiMjE1MWQ1ZDZiYzZkYWQxYTZiYSIsIm5iZiI6MTc1NjIyNzQ2MS45OTgwMDAxLCJzdWIiOiI2OGFkZTc4NTJmNWM0YTExMmNmMzhkY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._vsE_Rq-WsV7vlSG1SNb5FxkuJ-41ZKF7gsAw2tm2XA'
          }
        };

        const response = await fetch(url,options);
        const data = await response.json();

        console.log(data);
        setMovies2(data.results)
    }

    buscarFilmes();
    
}, [] )


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
    <h2 style={{color: 'white'}}>Filmes Populares</h2>

    <FlatList
      data={movies} // busca 
      horizontal = {true}
      keyExtractor={(item) => item.id}

      renderItem={({item}) => (
       
        <CardMovies titulo={item.title} imagem={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} nota={item.vote_average.toFixed(2)} descricao={item.overview}></CardMovies>
      )}


    />      
    <h2 style={{color: 'white'}}>Séries Populares</h2>
    <FlatList
      data={movies2} // busca 
      horizontal = {true}
      keyExtractor={(item) => item.id}

      renderItem={({item}) => (
       
        <CardMovies titulo={item.name} imagem={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} nota={item.vote_average.toFixed(2)} descricao={item.overview}></CardMovies>
      )}


    />

    </View>
    
  </View>

    )

}
const styles = StyleSheet.create({

  container:{
    display:'flex',
    overflowY: 'scroll',
    alignItems:'center',
    backgroundColor:'black',

    flex:1  
  }


})