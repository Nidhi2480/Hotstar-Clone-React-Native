import { StyleSheet, ScrollView, View, StatusBar } from "react-native";
import { Card } from "react-native-paper";
import Banner from "@/components/banner/Banner";
import MoviesRow from "../movierows/MoviesRow";
import ProductionHouses from "../productionhouselogos/ProductionHouses";
import FullMovieRowCarousel from "../movierowcarousel/FullMovieRowCarousel";
const HomeView = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      backgroundColor: "black",
    },
    movierowcontainer: {
      flex: 1,
    },
    card: {
      backgroundColor: "black",
      marginBottom: 16,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Banner />
      </Card>
      <View style={styles.movierowcontainer}>
        <MoviesRow small={false} title={"Drama"} genre={"drama"} />
        <MoviesRow small={false} title={"Classic"} genre={"classic"} />
        <MoviesRow small={true} title={"Family"} genre={"family"} />
        <FullMovieRowCarousel />
        <MoviesRow small={false} title={"Western"} genre={"western"} />
        <ProductionHouses />
        <MoviesRow small={false} title={"Mystery"} genre={"mystery"} />
      </View>
    </ScrollView>
  );
};

export default HomeView;
