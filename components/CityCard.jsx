import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CityCard({ id, name, region, population, imgSrc }) {
  const navigation = useNavigation();

  function navigationHandler() {
    navigation.navigate("CitiesDetail", { cityId: id });
  }

  return (
    <Pressable style={styles.container} onPress={navigationHandler}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} src={imgSrc} />
      </View>
      <View style={styles.detail}>
        <Text style={styles.detailText}>{name}</Text>
        <Text style={styles.detailText}>{region}</Text>
        <Text style={styles.detailText}>{population}M</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 200,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    elevation: 6,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  imageContainer: {
    flex: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    paddingHorizontal: 12,
  },
  detailText: {
    fontWeight: 600,
  },
});
