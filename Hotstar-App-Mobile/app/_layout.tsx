import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useState, useEffect } from "react";
import "react-native-reanimated";

export const Context = React.createContext();
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [isfavMovies, setFavMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  const addToAllMovies = (movies) => {
    const newMovies = movies.map((movie) => ({
      ...movie,
      id: `${movie.id}${movie.imdbId}`,
    }));

    setAllMovies((prevAllMovies) => [...prevAllMovies, ...newMovies]);
  };
  const handleFavMovies = (id, movie, action) => {
    switch (action) {
      case "add":
        let Movie = {
          movieid: id,
          movie: movie,
        };
        setFavMovies((prevFavMovies) => [...prevFavMovies, Movie]);
        console.log(isfavMovies);
        break;
      case "remove":
        setFavMovies((prevFavMovies) =>
          prevFavMovies.filter((item) => !(item.movieid === id))
        );
        break;
      default:
        break;
    }
  };
  return (
    <Context.Provider
      value={{ handleFavMovies, isfavMovies, addToAllMovies, allMovies }}
    >
      <ThemeProvider value={DarkTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{
              presentation: "modal",
              animation: "slide_from_bottom",
              headerShown: false,
              gestureEnabled: true,
            }}
          />
          <Stack.Screen
            name="favourites"
            options={{
              presentation: "modal",
              animation: "slide_from_bottom",
              headerShown: false,
              gestureEnabled: true,
            }}
          />
        </Stack>
      </ThemeProvider>
    </Context.Provider>
  );
}
