import { View,TextInput,Text,FlatList,StyleSheet,TouchableOpacity,Image } from "react-native";
import React from "react";
import { useState,useContext } from "react";
import { Context } from '../../app/_layout';
import { useNavigation } from "expo-router";

const Search = () => {


  const navigation = useNavigation();
  const { handleFavMovies, isfavMovies,addToAllMovies,allMovies } = useContext(Context);
  console.log(allMovies)
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text) {
      const filtered = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(allMovies);
    }
  }

  return (
    <View>
        <TextInput
        style={styles.input}
        placeholder="Search movies..."
        value={searchTerm}
        onChangeText={handleSearch}
      />
    <Text style={styles.heading}>Movies</Text>
    <FlatList
      numColumns={2}
      data={filteredMovies}
      keyExtractor={(item) => item.imdbId}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("modal", { movie: item, genre: 'nothing' })
          }
        >
          <Image
            style={styles.details}
            source={{ uri: item.posterURL }}
          />
        </TouchableOpacity>
      )}
    />
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginTop:100,
    height:50,
    alignSelf:'center',
    width:350,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor:'white',
    borderRadius:10,
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
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
      width: 180,
      height: 140,
      margin:7,
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


export default Search;
