import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import MovieDetails from '@/components/moviedetails.tsx/MovieDetails';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
        <MovieDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
