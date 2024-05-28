import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import SampleData from "../../data/SampleRowData";
import { useNavigation } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
type RootStackParamList = {
  modal: {
    movie: any;
    genre: string;
  };
};
type NavigationProp = StackNavigationProp<RootStackParamList, "modal">;

const { width } = Dimensions.get("window");
const NewMovies = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View>
      <FlatList
        data={SampleData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("modal", { movie: item, genre: "nothing" })
            }
          >
            <Image style={styles.details} source={item.poster} />

            <Image style={styles.logo} source={item.logo} />
            <Text style={styles.heading}>{item.description}</Text>
            <Pressable style={styles.wrapperCustom}>
              {
                <Text style={styles.text}>
                  <FontAwesome name="bell" size={20} color="black" />
                  {"   Remind me"}
                </Text>
              }
            </Pressable>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    width: width - 10,
    height: 220,
    padding: 10,

    borderRadius: 5,
  },
  logo: {
    width: 150,
    height: 80,
    padding: 10,
    objectFit: "contain",
    alignSelf: "flex-start",
  },

  wrapperCustom: {
    margin: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
    height: 50,
    backgroundColor: " rgb(255, 255, 255)",
    justifyContent: "center",
    alignItems: "center",
    width: width - 30,
    color: "black",
  },
  text: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  heading: {
    color: "rgba(255,255,255,.5)",
    fontSize: 19,
    padding: 10,
  },
  movieheading: {
    color: "white",
    fontSize: 14,
    padding: 10,
  },
});

export default NewMovies;
