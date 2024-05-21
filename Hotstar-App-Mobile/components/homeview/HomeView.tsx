import { StyleSheet,ScrollView} from 'react-native';
import { Card } from 'react-native-paper';
import Banner from '@/components/banner/Banner';
import MoviesRow from '../movierows/MoviesRow';
import { StatusBar } from 'expo-status-bar';
import ProductionHouses from '../productionhouselogos/ProductionHouses';


const HomeView = () => {
  
const styles = StyleSheet.create({

    container: {
      flex:1,
      padding: 8,
       backgroundColor: 'black',
       
    },
    card: {
      backgroundColor: 'black',
      marginBottom: 16,
    },
  
   
  
   
  });
  
  return (
    <ScrollView style={styles.container}>

     
       <Card style={styles.card}>
        <Banner movie={false} />
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