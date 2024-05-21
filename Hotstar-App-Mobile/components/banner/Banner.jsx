
import { Text, View, StyleSheet, Image ,FlatList,Pressable, Touchable, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react'
import { DefaultMov } from './Default'
import { LinearGradient } from 'expo-linear-gradient';
import SampleData from '../../data/SampleRowData'

export default function Banner({movie}) {
  const [isbanner,setBanner]=useState([])
  useEffect(()=>{
    if(movie){
      setBanner(movie)
    }else{
      setBanner(SampleData[0])
    }

  },[movie]) 

  const handlePress=(item)=>{
    setBanner(item)

  }
  return (
    
    <View style={styles.container}>
      
      <Image style={styles.banner} source={isbanner.poster?isbanner.poster:{ uri: isbanner.posterURL }}/> 
     
      <View style={styles.bannerdesc}>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
      {isbanner.poster && (<FlatList
           horizontal={true}
           data={SampleData}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>handlePress(item)}>
             <Image style={styles.logo} source={item.logo}/>
            </TouchableOpacity>
           )}
           /> )}
           <Text style={styles.details}>{`${isbanner.poster?isbanner.genre.year:'2017'} • ${isbanner.poster?isbanner.genre.length:'2h 12m'} • ${isbanner.poster?isbanner.genre.languages:'5 languages'} • ${isbanner.poster?isbanner.genre.ua:'U/A 12+'}`}</Text>
         <View style={styles.buttons}>
            <Pressable

            style={styles.wrapperCustom}>
            {
            <Text style={styles.text}>{'Subscribe to watch'}</Text>
            }
            </Pressable>
            <Pressable

            style={styles.wrapperCustom}>
            {
            <Text style={styles.text}>{'+'}</Text>
            }
            </Pressable>

         </View>
         {!isbanner.poster && (<>
          <Text style={styles.details}>{DefaultMov.category}</Text>
          <Text style={styles.details}>{isbanner.title} {DefaultMov.desc}</Text></>
         )}
         
         
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
      width:500,
      bottom:0,
    
      alignItems: 'center', 
      backgroundColor: 'rgba(0,0,0,0.8)', 
 

   },
   logo:{
    objectFit:'contain',
    borderRadius:5,
    width:350,
    height:200,
    marginLeft:50

   },
   banner: {
    objectFit:'cover',
    borderRadius:5,
    height:500,
    width:500,
   
   
  },
  background:{
    position:'absolute',
    zIndex:-1,
    height:300
  },
  buttons:{
    flexDirection:'row'
  },

  details:{
    marginTop:10,
    color:'white',
    fontSize:19
  },
  wrapperCustom:{
    margin:10,
    paddingLeft:30,
    paddingRight:30,
    borderRadius:10,
    height:50,
    backgroundColor:' rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
          alignItems: 'center',

    color:'white' },
    text:{

      
      color:'white'
    }
});
