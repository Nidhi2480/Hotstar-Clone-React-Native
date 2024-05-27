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
    paddingVertical: 25,
    paddingHorizontal: 8,
    backgroundColor: "rgba(0,0,0,0)",
    width: width,
  },
  logoContainer: {
    width: 65,
    height: 65,
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  button: {
    width: 80,
    borderWidth: 0.4,
    borderColor: "orange",
    borderRadius: 4,
    paddingHorizontal: 2.5,
    paddingVertical: 4,
  },
  buttonText: {
    color: "orange",
    textAlign: "center",
    fontSize:12
  },
});
