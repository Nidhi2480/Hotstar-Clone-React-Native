import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import SampleData from "../../data/SampleRowData";

const { width } = Dimensions.get("window");
const FullMovieRowCarousel = () => {
  const styles = StyleSheet.create({
    bannerdesc: {
      flex: 1,
      paddingVertical: 15,
    },
    posterbackground: {
      flex: 1,
    },
    poster: {
      objectFit: "cover",
      height: 170,
      width: width,
      borderRadius: 7,
    },
    active: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: "white",
      marginHorizontal: 3,
    },
    notactive: {
      marginBottom: 10,
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.2)",
      marginHorizontal: 3,
    },
  });
  return (
    <View style={styles.bannerdesc}>
      <SwiperFlatList
        autoplay
        autoplayLoop
        autoplayDelay={10}
        index={2}
        showPagination
        paginationStyleItemActive={styles.active}
        paginationStyleItem={styles.notactive}
        data={SampleData}
        renderItem={({ item }) => (
          <View style={styles.posterbackground}>
            <TouchableOpacity>
              <Image style={styles.poster} source={item.poster} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FullMovieRowCarousel;
