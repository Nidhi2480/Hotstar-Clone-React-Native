import React, { useContext } from "react";
import { Context } from "../../app/_layout";
import { StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { Text } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Favourites() {
  const { handleFavMovies, isfavMovies } = useContext(Context);
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    details: {
      width: 135,
      height: 180,
      margin: 8,
      padding: 10,
      borderRadius: 10,
    },
    heading: {
      alignSelf: "center",
      color: "white",
      fontSize: 19,
      padding: 29,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Favourites</Text>
      <FlatList
        numColumns={3}
        data={isfavMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("modal", {
                movie: item.movie,
                genre: "nothing",
              })
            }
          >
            <Image
              style={styles.details}
              source={
                item.movie.posterURL
                  ? { uri: item.movie.posterURL }
                  : item.movie.poster
              }
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
