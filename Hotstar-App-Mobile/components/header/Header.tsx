import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    const styles = StyleSheet.create({
       
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
        }
      });
  return (
    <View style={styles.nav}>
    <View style={styles.img}>
     <Image style={styles.logo} source={require('../../assets/logo1.png')} /></View>
      <Text style={styles.navText}>subscribe</Text>
    </View>
  )
}

export default Header