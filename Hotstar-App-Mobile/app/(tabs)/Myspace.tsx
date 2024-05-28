import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext } from "react";
import { Link } from "expo-router";
import { Context } from "../../app/_layout";

const Myspace = () => {
  const { isfavMovies } = useContext(Context);
  const styles = StyleSheet.create({
    favouritescontainer: {
      flex: 1,
      justifyContent: "center",
    },
    wrapperCustom: {
      margin: 10,
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 8,
      height: 50,
      width: 100,
      backgroundColor: " rgba(0, 0, 255,.2)",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",

      color: "white",
    },
    text: {
      color: "white",
      fontSize: 15,
    },
    logintext: { color: "white", fontSize: 22, alignSelf: "center" },
    logindesc: {
      color: "rgba(255, 255, 255, 0.2)",
      fontSize: 16,
      alignSelf: "center",
      padding: 20,
    },
  });
  return (
    <View style={styles.favouritescontainer}>
      <Text style={styles.logintext}>Login to Disney+ Hotstar</Text>
      <Text style={styles.logindesc}>
        Start watching from where you left off,personalise for kids and more
      </Text>
      <Pressable style={styles.wrapperCustom}>
        {<Text style={styles.text}>{"Login"}</Text>}
      </Pressable>
      <Text style={styles.logindesc}>Having trouble logging in? Get Help</Text>
      <Link href="/favourites" asChild>
        <Text
          style={{
            color: "white",

            alignSelf: "center",
            fontSize: 22,
          }}
        >
          {isfavMovies.length > 0
            ? `${isfavMovies.length} Favourites`
            : "0 Favourites"}
        </Text>
      </Link>
    </View>
  );
};

export default Myspace;
