
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Banner() {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/starwarscard.webp')} />
      <Text style={styles.details}> English • Biopic • Culture • Event </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    top:0,
    justifyContent: 'center',
    backgroundColor:'black',
    height:400,
 
  },
  logo: {
    objectFit:'cover',
    borderRadius:10,
    height: '90%',
    width: '100%',
  },
  details:{
    marginTop:10,
    color:'white',
    fontSize:19
  }
});
