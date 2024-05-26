import { StyleSheet, ScrollView } from "react-native";
import MoviesRow from "../Movierows/MoviesRow";
import { Card } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import React from "react";
import DetailsBanner from "./Detailsbanner/DetailsBanner";

const MovieDetails = () => {
  const route = useRoute();
  console.log(route.params);
  const { movie, genre } = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor: "black",
    },
    card: {
      backgroundColor: "black",
      marginBottom: 16,
    },
  });
  return (
    <>
      <ScrollView style={styles.container}>
        <Card style={styles.card}>
          <DetailsBanner movie={movie} />
        </Card>
        <MoviesRow
          small={false}
          title={"More Like This"}
          genre={genre === "nothing" ? "drama" : genre}
        />
      </ScrollView>
    </>
  );
};

export default MovieDetails;
