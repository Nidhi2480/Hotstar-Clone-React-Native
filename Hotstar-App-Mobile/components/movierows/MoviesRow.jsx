import { useEffect, useState } from 'react';
import { StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
import { useNavigation } from 'expo-router';
import {Text} from '@/components/Themed';

import {FetchMovie} from '../../api/MovieFetch'
// interface Movie {
//   id: number;
//   imdbId: string;
//   posterURL: string;
//   title: string;
//<Movie[]> }

export default function MoviesRow({title,genre}){
const navigation=useNavigation()
const [isMoviesData,setMovieData]=useState([])
useEffect(()=>{
  const handleAPI=async()=>{
    const data=await FetchMovie(genre)
    setMovieData(data)
  };
  handleAPI();
},[]);

const styles = StyleSheet.create({
    details:{
      width:130,
      height:180,
      marginRight: 8,
      padding:10,
      borderRadius:5
    },
    smalldetails:{
      width:170,
      height:100,
      marginRight: 8},
    heading:{
      marginTop:10,
      color:'white',
      fontSize:19
    },
   

  });
    return(
        <>
           <Text style={styles.heading}>{title}</Text>
           <FlatList
              horizontal={true}
              data={isMoviesData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>navigation.navigate('modal',{ item,genre})}>
                <Image style={styles.details} source={{ uri: item.posterURL }} /></TouchableOpacity>
              )}
            />
           
        </>
    )


}
   