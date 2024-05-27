import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import SampleData from "../../data/SampleRowData";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

export default function Banner({ small }) {
  const navigation = useNavigation();
  const [isbanner, setBanner] = useState(SampleData[0]);
  const handleChangeIndex = ({ index }) => {
    setBanner(SampleData[index]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          style={small ? styles.smallbanner : styles.banner}
          source={
            isbanner.poster ? isbanner.poster : { uri: isbanner.posterURL }
          }
        />
        <LinearGradient
          colors={["black", "transparent"]}
          style={styles.topbackground}
        />
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.background}
        />
      </View>
      <View style={styles.bannerdesc}>
        {isbanner.poster && (
          <SwiperFlatList
            autoplay
            autoplayLoop
            autoplayDelay={7}
            index={small ? 2 : 0}
            showPagination
            paginationStyleItemActive={styles.active}
            paginationStyleItem={styles.notactive}
            data={SampleData}
            renderItem={({ item }) => (
              <View style={styles.logobackground}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("modal", {
                      movie: item,
                      genre: "nothing",
                    })
                  }
                >
                  <Image style={styles.logo} source={item.logo} />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            onChangeIndex={handleChangeIndex}
          />
        )}
        <View style={styles.details}>
          <Text
            style={styles.description}
          >{`${isbanner.genre.year} • ${isbanner.genre.length} • ${isbanner.genre.languages} • ${isbanner.genre.ua}`}</Text>
          <View style={styles.buttons}>
            {small ? (
              <Pressable style={styles.wrapperCustom}>
                {
                  <Text style={styles.text}>
                    <FontAwesome name="play" size={17} color="white" />
                    {" Subscribe to watch"}{" "}
                  </Text>
                }
              </Pressable>
            ) : (
              <>
                <Pressable style={styles.wrapperCustom}>
                  {
                    <Text style={styles.text}>
                      <FontAwesome name="play" size={17} color="white" />
                      {" Watch"} <Text style={styles.highlighttext}>Free</Text>
                    </Text>
                  }
                </Pressable>
                <Pressable style={styles.wrapperCustom}>
                  {<Text style={styles.text}>{"+"}</Text>}
                </Pressable>
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    top: 0,
    flex: 1,
  },

  logobackground: {
    width: width,
    height: 80,
    margin: 0,
  },
  bannerdesc: {
    position: "absolute",
    height: 280,
    width: width,
    bottom: 0,
    alignItems: "center",
  },
  logo: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
  bannerContainer: {
    alignItems: "center",
  },
  banner: {
    objectFit: "cover",
    height: 500,
    width: width,
  },
  smallbanner: {
    objectFit: "cover",
    height: 380,
    width: width,
  },
  background: {
    position: "absolute",
    bottom: 0,
    zIndex: 0,
    height: 400,
    width: 500,
  },
  topbackground: {
    position: "absolute",
    top: 0,
    zIndex: 0,
    height: 200,
    width: 500,
  },
  buttons: {
    flexDirection: "row",
  },

  description: {
    color: "white",
    fontSize: 15,
  },
  details: {
    height: "45%",
    alignItems: "center",
  },
  wrapperCustom: {
    margin: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 8,
    height: 50,
    backgroundColor: " rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",

    color: "white",
  },
  text: {
    color: "white",
    fontSize: 15,
  },
  highlighttext: {
    color: "lightblue",
  },
  active: {
    height: 8,
    width: 8,
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
