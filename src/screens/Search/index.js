import { StyleSheet,View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import Search from "../../components/searchbar/index.js";
import CardMoviesSearch from "../../components/cardMoviesSearch/index.js";



export default function search() {
    const routes = useRoute()
    const tituloInserido = routes.params.busca

    const [moviesBusca, setMoviesBusca] = useState();
    useEffect(() => {

        async function a() {
            const url = `https://api.themoviedb.org/3/search/movie?query=${tituloInserido}&include_adult=false&language=pt-BR&page=1`;
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDdhMTc0YWIzMjU4MzY1NWY0NDE3MjhhZTcyZDVlNCIsIm5iZiI6MTY2NDIyMTM0NS4wMTYsInN1YiI6IjYzMzIwMGExYTVkODQ5MDA5MjU2MTFmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_zGlEuFg8f5E-KhiABo9rzEZTcvWJW4Dbc8cepLNbo'
              }
            };

            const response = await fetch(url,options);
            const data = await response.json();
      
            console.log(data);
            setMoviesBusca(data.results)
        }

        a()

    }, [])


    return(
        <View style={styles.container}>
            <View style= {styles.containerSearch}>
                <Search></Search>
            </View>
            <FlatList
                data={moviesBusca} // busca 
                vertical = {true}

                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
        
                    <CardMoviesSearch 
                        titulo={item.title} 
                        imagem={`https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path}`} 
                        nota={item.vote_average.toFixed(2)}
                        descricao={item.overview}
                    >                    
                    </CardMoviesSearch>
                )}/>
        </View>
    )
}
function verificacao(item) {

}
const styles = StyleSheet.create({

    container:{
      backgroundColor:'black',
      overflow: 'scroll',
  
      flex:1  
    },
    containerSearch:{
        display: 'flex',
        alignItems: 'center'
    },

  
  
  })