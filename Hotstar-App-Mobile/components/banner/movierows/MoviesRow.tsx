import { useEffect, useState } from 'react';
import { StyleSheet,Image,FlatList} from 'react-native';
import {Text} from '@/components/Themed';
import SampleData from '../../../data/SampleRowData'
import {FetchMovie} from '../../../hooks/MovieFetch'
interface Movie {
  id: number;
  imdbId: string;
  posterURL: string;
  title: string;
}

export default function MoviesRow(){
 
const [isMoviesData,setMovieData]=useState<Movie[]>([])
useEffect(()=>{
  const handleAPI=async()=>{
    const data=await FetchMovie()
    setMovieData(data)
  };
  handleAPI();
},[]);

const styles = StyleSheet.create({
    details:{
      width:130,
      height:150,
      marginRight: 8,
      padding:10
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
           <Text style={styles.heading}>Latest Releases</Text>
           <FlatList
              horizontal={true}
              data={isMoviesData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Image style={styles.details} source={{ uri: item.posterURL }} />
              )}
            />
          <Text style={styles.heading}>Free Newly Added</Text>
           <FlatList
           horizontal={true}
           data={SampleData}
           keyExtractor={(item) => item.id}
           renderItem={({ item }) => (
             <Image style={styles.smalldetails} source={{ uri: item.name }} />
           )}
         />
        </>
    )


}
   