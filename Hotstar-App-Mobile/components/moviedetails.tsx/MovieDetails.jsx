import { View, Text, StyleSheet,ScrollView } from 'react-native'
import MoviesRow from '../movierows/MoviesRow'
import { Card } from 'react-native-paper';
import Banner from '../banner/Banner'
import { useRoute } from '@react-navigation/native';
import React from 'react'

const MovieDetails = () => {
  const route = useRoute();
  const { item,genre } = route.params;
  const styles=StyleSheet.create({

    container: {
      flex:1,
      padding: 8,
      backgroundColor: 'black',
       
    },
    card: {
      backgroundColor: 'black',
      marginBottom: 16,
    },
    } )
  return (
    <>  
      <ScrollView style={styles.container}>
        <Card style={styles.card}>
        <Banner movie={item} />
        </Card>
        <MoviesRow title={'More Like This'} genre={genre}/>
       </ScrollView>  
    </>
  )
}

export default MovieDetails