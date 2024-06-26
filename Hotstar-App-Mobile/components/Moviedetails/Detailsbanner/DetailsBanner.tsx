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
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { DefaultMov } from "@/components/Banner/Default";
import { FontAwesome } from "@expo/vector-icons";
import { Context } from "../../../app/_layout";
import findFavMovies from "./FindFavMovies";
const { width } = Dimensions.get("window");

const DetailsBanner = ({ movie }) => {
  const { handleFavMovies, isfavMovies } = useContext(Context);

  const handlePress = (id, movie, action) => {
    handleFavMovies(id, movie, action);
  };

  const styles = StyleSheet.create({
    Banner: {
      flex: 1,
      marginTop: 45,
      width: width,
    },
    bannerimage: {
      height: 250,
      borderRadius: 15,
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
      fontSize: 16,
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
      fontSize: 14,
      fontWeight: "bold",
    },
    movdetails: {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: 16,
    },
    buttons: {
      flexDirection: "row",
      paddingHorizontal: 30,
      paddingTop: 30,
      gap: 50,
    },
    buttonstextcontainer: {
      flexDirection: "row",
      gap: 17.5,
    },
    buttondetails: {
      color: "white",
      fontSize: 12,
      padding: 15,
    },
    link: {
      position: "absolute",
      top: 0,
      alignSelf: "flex-end",
      padding: 20,
      zIndex: 2,
      backgroundColor: "rgba(0,0,0,0.2)",
      borderRadius: 50,
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
        <Ionicons name="add-sharp" size={27} color="white" />
        <Fontisto name="share-a" size={27} color="white" />
        <FontAwesome6 name="heart" size={27} color="white" />
        {!findFavMovies(isfavMovies, movie.imdbId) ? (
          <Pressable onPress={() => handlePress(movie.imdbId, movie, "add")}>
            <AntDesign name="star" size={34} color="white" />
          </Pressable>
        ) : (
          <Pressable onPress={() => handlePress(movie.imdbId, movie, "remove")}>
            <AntDesign name="star" size={34} color="orange" />
          </Pressable>
        )}
      </View>
      <View style={styles.buttonstextcontainer}>
        <Text style={styles.buttondetails}>Watchlist</Text>
        <Text style={styles.buttondetails}>Share</Text>
        <Text style={styles.buttondetails}>Rate</Text>
        <Text style={styles.buttondetails}>Favourites</Text>
      </View>
    </View>
  );
};

export default DetailsBanner;
