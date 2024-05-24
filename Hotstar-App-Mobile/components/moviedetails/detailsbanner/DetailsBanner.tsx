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
import { FontAwesome } from "@expo/vector-icons";

const DetailsBanner = ({ movie }) => {
  const styles = StyleSheet.create({
    Banner: {
      flex: 1,
      width: width - 10,
    },
    bannerimage: {
      height: 250,
      borderRadius: 25,
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
      backgroundColor: " rgb(255, 255, 255)",
      justifyContent: "center",
      alignItems: "center",
      width: width - 30,
      color: "black",
    },
    text: {
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
    },
    movdetails: {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: 19,
    },
    buttons: {
      flexDirection: "row",
      paddingHorizontal: 30,
      paddingTop: 30,
      gap: 50,
    },
    buttonstextcontainer: {
      flexDirection: "row",
      gap: 10,
    },
    buttondetails: {
      color: "white",
      fontSize: 14,
      padding: 15,
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

      <Image
        style={styles.bannerimage}
        source={movie.poster ? movie.poster : { uri: movie.posterURL }}
      />
      <View style={styles.description}>
        <Image
          style={styles.bannerlogo}
          source={
            movie.poster
              ? movie.logo
              : require("../../../assets/productionhouselogo/hotstarsp.png")
          }
        />
        <Text style={styles.details}>{movie.title}</Text>

        <Pressable style={styles.wrapperCustom}>
          {
            <Text style={styles.text}>
              <FontAwesome name="play" size={17} color="black" />
              {" Subscribe to watch"}
            </Text>
          }
        </Pressable>
        <Text style={styles.details}>{DefaultMov.category}</Text>
        <Text style={styles.movdetails}>
          {movie.poster
            ? movie.description
            : `${movie.title} ${DefaultMov.desc}`}
        </Text>
      </View>
      <View style={styles.buttons}>
        <Ionicons name="add-sharp" size={30} color="white" />
        <Fontisto name="share-a" size={27} color="white" />
        <FontAwesome6 name="heart" size={27} color="white" />
      </View>
      <View style={styles.buttonstextcontainer}>
        <Text style={styles.buttondetails}>Watchlist</Text>
        <Text style={styles.buttondetails}>Share</Text>
        <Text style={styles.buttondetails}>Rate</Text>
      </View>
    </View>
  );
};

export default DetailsBanner;
