import { View, Text,TouchableOpacity,StyleSheet} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
  
const Myspace = () => {
  const navigation = useNavigation();
  const styles=StyleSheet.create({

    favouritescontainer:{
      flex:1,
    }
  }
    
  )
  return (
    <View style={styles.favouritescontainer}>
     
      <TouchableOpacity
          onPress={() =>
            navigation.navigate("favourites")
          }
        >
           <Text style={{color:'white',marginTop:300,alignSelf:'center'}}>Favourites</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Myspace;
