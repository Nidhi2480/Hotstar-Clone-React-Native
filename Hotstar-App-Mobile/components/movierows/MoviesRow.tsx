import { useEffect, useState,useContext } from "react";
import { StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { Text } from "@/components/Themed";
import { Context } from '../../app/_layout';
import { fetchMovie } from "../../api/MovieFetch";
// interface Movie {
//   id: number;
//   imdbId: string;
//   posterURL: string;
//   title: string;
//<Movie[]> }


export default function MoviesRow({ small, title, genre }) {
  const { handleFavMovies, isfavMovies,addToAllMovies } = useContext(Context);
  const navigation = useNavigation();
  const [isMoviesData, setMovieData] = useState([]);
  useEffect(() => {
    const handleAPI = async () => {
      const data = await fetchMovie(genre);
      setMovieData(data);
      addToAllMovies(data)
    };
    handleAPI();
  }, []);

  const styles = StyleSheet.create({
    details: {
      width: 120,
      height: 160,
      marginRight: 4,
      padding: 10,
      borderRadius: 5,
    },
    smalldetails: {
      width: 270,
      height: 130,
      marginRight: 8,
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
  return (
    <>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        horizontal={true}
        data={isMoviesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("modal", { movie: item, genre: genre })
            }
          >
            <Image
              style={small ? styles.smalldetails : styles.details}
              source={{ uri: item.posterURL }}
            />
            {small && <Text style={styles.heading}>{item.title}</Text>}
          </TouchableOpacity>
        )}
      />
    </>
  );
}
