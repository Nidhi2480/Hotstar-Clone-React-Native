
import { Text, View, StyleSheet, Image ,FlatList,Pressable, Touchable, TouchableOpacity} from 'react-native';
import { useState } from 'react'
import SampleData from '../../data/SampleRowData'
export default function Banner() {
  const [isbanner,setBanner]=useState(SampleData[0])
  const handlePress=(item)=>{
    setBanner(item)

  }
  return (
    
    <View style={styles.container}>
      <Image style={styles.banner} source={isbanner.poster}/>
      
      <View style={styles.bannerdesc}>
      <FlatList
           horizontal={true}
           data={SampleData}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>handlePress(item)}>
             <Image style={styles.logo} source={item.logo}/>
            </TouchableOpacity>
           )}
         />
      <Text style={styles.details}>{`${isbanner.genre.year} • ${isbanner.genre.length} • ${isbanner.genre.languages} • ${isbanner.genre.ua}`}</Text> 
         <Pressable

          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'red',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Pressed!' : 'Subscribe to watch'}</Text>
          )}
      </Pressable>
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    top:0,
    flex:1
 
   },
   bannerdesc:{
      position:'absolute',
      height:300,
      bottom:0,
      justifyContent:'center',
      alignItems: 'center', 

   },
   logo:{
    objectFit:'contain',
    borderRadius:5,
    width:350,
    height:200,
    marginLeft:50

   },
   banner: {
    objectFit:'contain',
    borderRadius:5,
    height: 500,

    
   
  },
  details:{
    marginTop:10,
    color:'white',
    fontSize:19
  },
  wrapperCustom:{
    marginTop:10,
    width:300,
    borderRadius:10,
    height:50,
    backgroundColor:' rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
          alignItems: 'center',

    color:'white' },
    text:{

      
      color:'white'
    }
});
