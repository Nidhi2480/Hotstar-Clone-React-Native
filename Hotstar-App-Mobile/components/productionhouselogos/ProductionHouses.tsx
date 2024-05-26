import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ProductionHousesData from "../../data/ProdHouseData";
const ProductionHouses = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",

      flexWrap: "wrap",
      marginTop: 20,
      borderColor: "white",
    },

    image: {
      width: 113,
      height: 100,
      objectFit: "contain",
      backgroundColor: "rgba(255,255,255,0.09)",
      margin: 5,
    },
  });
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ProductionHousesData[0].pimg} />
      <Image style={styles.image} source={ProductionHousesData[1].pimg} />

      <Image style={styles.image} source={ProductionHousesData[2].pimg} />
      <Image style={styles.image} source={ProductionHousesData[3].pimg} />

      <Image
        style={styles.image}
        source={require("../../assets/productionhouselogo/viewers-starwars.png")}
      />
      <Image
        style={styles.image}
        source={require("../../assets/productionhouselogo/hotstarsp.png")}
      />
    </View>
  );
};

export default ProductionHouses;
