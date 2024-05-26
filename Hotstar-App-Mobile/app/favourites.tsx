
import React,{useContext} from "react";
import { Context } from './_layout';
import { StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { Text } from "@/components/Themed";
export default function Favourites() {
  const { handleFavMovies, isfavMovies } = useContext(Context);
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    details: {
      width: 140,
      height: 180,
      marginRight: 8,
      padding: 10,
      borderRadius: 10,
    },
    heading: {
      color: "white",
      fontSize: 19,
      padding: 10,
    },
    movieheading: {
      color: "white",
      fontSize: 14,
      padding: 10,
    },
  });
  return(
    <>
    <Text style={styles.heading}>favourites</Text>
    <FlatList
      numColumns={2}
      data={isfavMovies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("modal", { movie: item.movie, genre: 'nothing' })
          }
        >
          <Image
            style={styles.details}
            source={item.movie.posterURL?{ uri: item.movie.posterURL }: item.movie.poster}
          />
        </TouchableOpacity>
      )}
    />
  </>
    
  );
}
