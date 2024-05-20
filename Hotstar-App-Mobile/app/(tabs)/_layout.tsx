import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { StyleSheet,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Text, View } from '@/components/Themed';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { MaterialIcons } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    
const styles = StyleSheet.create({
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
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle:{
            backgroundColor:'black',
            height:80
        },
        headerStyle:{
          backgroundColor:'black',

        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title:'',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
          
          headerRight: () => (
            <Link href="/modal" asChild>
              <Text style={styles.navText}>subscribe</Text>
            </Link>
          ),
          headerLeft:()=>(

            <View style={styles.img}>
            <Image style={styles.logo} source={require('../../assets/logo1.png')} />
            </View>

          )
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title:'',
          tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color}  />,
        }}
      />
       <Tabs.Screen
        name="three"
        options={{
          title:'',
          tabBarIcon: ({ color }) => <MaterialIcons name="movie" size={24} color={color} />,
        }}
      />
    
         <Tabs.Screen
        name="hbjh"
        options={{
          title:'',
          tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color}/>,
        }}
      />
        <Tabs.Screen
          name="account"
          options={{
            title:'',
            tabBarIcon: ({ color }) =><MaterialCommunityIcons name="account-circle" size={24} color={color} />,
          }}
        />

    </Tabs>
        
    
  );
}
