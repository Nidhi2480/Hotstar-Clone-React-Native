import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import CustomHeader from "@/components/header/CustomHeader";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const styles = StyleSheet.create({
    tabBarStyle: {
      backgroundColor: "black",
      height: 80,
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
          title: "",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="movie" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="hbjh"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <AntDesign name="download" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "",
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
