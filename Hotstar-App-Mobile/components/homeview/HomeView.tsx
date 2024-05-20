import { StyleSheet,ScrollView,Image,Pressable,FlatList} from 'react-native';
import { Card } from 'react-native-paper';
import Banner from '@/components/banner/Banner';
import MoviesRow from '../movierows/MoviesRow';
import { Text, View } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import ProductionHouses from '../productionhouselogos/ProductionHouses';


const HomeView = () => {
  
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'aliceblue',
    },
    container: {
      padding: 8,
       backgroundColor: 'black',
       
    },
    card: {
      backgroundColor: 'black',
      marginBottom: 16,
    },
    nav: {
      flexDirection: 'row',
      width: '100%',
      padding: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor:'rgb(0,0,0,0)',
      position: 'absolute',
      zIndex: 1,
    },
    navText: {
     borderWidth: 2,
      borderColor: 'orange',
      borderRadius: 50,
      color: 'orange',
      textAlign: 'center',
      lineHeight: 25, 
      height: 25,
      width: 68,
    },
     logo: {
       objectFit:'cover',
       height:'100%',
       width:'100%',
    },
    img:{
      width:80,
      height:80,
      backgroundColor:'transparent'
    },
    wrapperCustom:{
      borderRadius:0.5,
      width:100,
      height:50,
      backgroundColor:' rgba(255, 255, 255, 0.2)',
      justifyContent: 'center',
            alignItems: 'center',
  
      color:'white' },
      text:{
  
        
        color:'white'
      }
  });
  
  return (
    <ScrollView style={styles.container}>
    <StatusBar translucent backgroundColor={'transparent'}/>

     
       <Card style={styles.card}>
        <Banner />
      </Card> 

     

    <MoviesRow title={'Drama'} genre={'drama'}/>
    <MoviesRow title={'Classic'} genre={'classic'}/>
    <MoviesRow title={'Family'} genre={'family'}/>
    <ProductionHouses/>
    <MoviesRow title={'Western'} genre={'western'}/>




      
    </ScrollView>
  )
}

export default HomeView