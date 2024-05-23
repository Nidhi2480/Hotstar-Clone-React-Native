import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import MovieDetails from "@/components/moviedetails/MovieDetails";

export default function ModalScreen() {
  return <MovieDetails />;
}
