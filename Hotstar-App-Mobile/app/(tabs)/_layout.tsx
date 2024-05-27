import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import CustomHeader from "@/components/Header/CustomHeader";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
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
