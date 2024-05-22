import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  Dimensions,
} from "react-native";
const { width } = Dimensions.get("window");

export default function CustomHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo1.png")} />
      </View>
      <Pressable
        style={styles.button}
        android_ripple={{ color: "orange", borderless: false }}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0)",
    width: width,
  },
  logoContainer: {
    width: 110,
    height: 115,
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  button: {
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 4,
    padding: 5,
  },
  buttonText: {
    color: "orange",
    textAlign: "center",
  },
});
