import React, { useContext } from "react";
import { Tabs } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import CustomHeader from "@/components/Header/CustomHeader";
import { Context } from "../_layout";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  const { handleFavMovies, isfavMovies, addToAllMovies, allMovies } =
    useContext(Context);
  const styles = StyleSheet.create({
    tabBarStyle: {
      backgroundColor: "black",
      height: 60,
    },
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: styles.tabBarStyle,
        header: () => <CustomHeader />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="New&Hot"
        options={{
          tabBarLabel: "New & Hot",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Dowloads"
        options={{
          tabBarLabel: "Dowloads",
          tabBarIcon: ({ color }) => (
            <AntDesign name="download" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favouritestab"
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color }) => (
            <Link href="/favourites" asChild>
              <View>
                <AntDesign name="star" size={24} color={color} />
                {isfavMovies.length > 0 && (
                  <View style={styles2.badge}>
                    <Text style={styles2.badgeText}>{isfavMovies.length}</Text>
                  </View>
                )}
              </View>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Myspace"
        options={{
          tabBarLabel: "My Space",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles2 = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -12,
    top: -5,
    backgroundColor: "white",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
});
