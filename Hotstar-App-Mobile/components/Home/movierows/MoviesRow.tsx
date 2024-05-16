import { StyleSheet,Image,FlatList} from 'react-native';
import {Text} from '@/components/Themed';
import SampleData from '../../../data/SampleRowData'

export default function MoviesRow(){
    

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
           data={SampleData}
           keyExtractor={(item) => item.id}
           renderItem={({ item }) => (
             <Image style={styles.details} source={{ uri: item.name }} />
           )}
         /><Text style={styles.heading}>Free Newly Added</Text>
           <FlatList
           horizontal={true}
           data={SampleData}
           keyExtractor={(item) => item.id}
           renderItem={({ item }) => (
             <Image style={styles.smalldetails} source={{ uri: item.name }} />
           )}
         /><Text style={styles.heading}>Popular Shows</Text>
           <FlatList
           horizontal={true}
           data={SampleData}
           keyExtractor={(item) => item.id}
           renderItem={({ item }) => (
             <Image style={styles.details} source={{ uri: item.name }} />
           )}
         /></>
    )


}
   