import { StyleSheet,SafeAreaView,ScrollView,Image,Pressable,FlatList} from 'react-native';
import { Card } from 'react-native-paper';
import Assetexample from '@/components/Home/Assetexample';
import MoviesRow from '../../components/Home/movierows/MoviesRow';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {

  return (
    
    <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.container}>
      <View style={styles.nav}>
      <View style={styles.img}>
       <Image style={styles.logo} source={require('../../assets/logo-d-plus.webp')} /></View>
        <Text style={styles.navText}>subscribe</Text>
      </View>
       <Card style={styles.card}>
        <Assetexample />
      </Card> 

      <Pressable

      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'red',
        },
        styles.wrapperCustom,
      ]}>
      {({pressed}) => (
        <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
      )}
    </Pressable>

    <MoviesRow/>




      
    </ScrollView>
  </SafeAreaView>
    // <View style={styles.container}>

    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/(tabs)/index.tsx" />
    // </View>
  );
}
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
     objectFit:'contain',
     height:'100%',
     width:'100%'
  },
  img:{
    width:50,
    height:50
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


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
