import {
  View,
  TextInput,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useState, useContext } from "react";
import { Context } from "../../app/_layout";
import { useNavigation } from "expo-router";
import { SimpleLineIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
type RootStackParamList = {
  modal: {
    movie: any;
    genre: string;
  };
};
type NavigationProp = StackNavigationProp<RootStackParamList, "modal">;

const getUniqueMovies = (movies) => {
  const uniqueMoviesMap = new Map();
  movies.forEach((movie) => {
    uniqueMoviesMap.set(movie.id, movie);
  });
  return Array.from(uniqueMoviesMap.values());
};

const SearchView = () => {
  const navigation = useNavigation<NavigationProp>();
  const { allMovies } = useContext(Context);
  const uniqueMovies = getUniqueMovies(allMovies);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(uniqueMovies);

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text) {
      const filtered = uniqueMovies.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(uniqueMovies);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Movies, shows and more"
        value={searchTerm}
        onChangeText={handleSearch}
      />
      {searchTerm ? (
        <Text style={styles.heading}>Showing result for "{searchTerm}"</Text>
      ) : (
        <Text style={styles.heading}>Trending in</Text>
      )}
      <View style={styles.categories}>
        <Text style={styles.categoryitems}>
          <SimpleLineIcons name="graph" size={16} color="white" /> {" India"}
        </Text>
        <Text style={styles.categoryitems}>Movies</Text>
        <Text style={styles.categoryitems}>Shows</Text>
        <Text style={styles.categoryitems}>Action</Text>
        <Text style={styles.categoryitems}>Comedy</Text>
      </View>
      <FlatList
        numColumns={2}
        data={filteredMovies}
        keyExtractor={(item) => `${item.id} ${item.imdbId}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("modal", { movie: item, genre: "nothing" })
            }
          >
            <Image style={styles.details} source={{ uri: item.posterURL }} />
            <Text style={styles.movieheading}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#000",
  },
  input: {
    marginTop: 100,
    height: 50,
    alignSelf: "center",
    width: 420,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 7,
    color: "black",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
  },
  categoryitems: {
    fontSize: 16,
    color: "white",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.09)",
  },
  movieItem: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  poster: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
  },
  details: {
    width: 210,
    height: 160,
    margin: 7,
    padding: 10,
    borderRadius: 4,
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

export default SearchView;
