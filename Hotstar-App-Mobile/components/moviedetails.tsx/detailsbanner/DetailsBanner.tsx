import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { DefaultMov } from "@/components/banner/Default";
const { width } = Dimensions.get("window");

const DetailsBanner = ({ movie }) => {
  const styles = StyleSheet.create({
    Banner: {
      flex: 1,
      width: width - 10,
    },
    bannerimage: {
      height: 250,
      borderRadius: 30,
      width: "100%",
      objectFit: "cover",
    },
    description: {
      alignItems: "center",
    },
    bannerlogo: {
      objectFit: "contain",
      width: "50%",
      height: 100,
    },
    details: {
      color: "white",
      fontSize: 19,
      padding: 10,
    },
    wrapperCustom: {
      margin: 10,
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 5,
      height: 50,
      backgroundColor: " rgba(255, 255, 255, 0.8)",
      justifyContent: "center",
      alignItems: "center",
      width: width - 30,
      color: "black",
    },
    text: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
    },
    movdetails: {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: 19,
    },
    buttons: {
      flexDirection: "row",
      padding: 30,
      gap: 50,
    },
    link: {
      height: 90,
      alignSelf: "flex-end",
      padding: 30,
      zIndex: 2,
    },
  });
  return (
    <View style={styles.Banner}>
      <Link href="../" style={styles.link}>
        <AntDesign name="close" size={35} color="white" />
      </Link>

      <Image style={styles.bannerimage} source={{ uri: movie.posterURL }} />
      <View style={styles.description}>
        <Image
          style={styles.bannerlogo}
          source={require("../../../assets/productionhouselogo/hotstarsp.png")}
        />
        <Text style={styles.details}>{movie.title}</Text>

        <Pressable style={styles.wrapperCustom}>
          {<Text style={styles.text}>{"Subscribe to watch"}</Text>}
        </Pressable>
        <Text style={styles.details}>{DefaultMov.category}</Text>
        <Text style={styles.movdetails}>
          {movie.title} {DefaultMov.desc}
        </Text>
      </View>
      <View style={styles.buttons}>
        <Ionicons name="add-sharp" size={30} color="white" />
        <Fontisto name="share-a" size={24} color="white" />
        <FontAwesome6 name="heart" size={30} color="white" />
      </View>
    </View>
  );
};

export default DetailsBanner;
