import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { CITIES } from "../data/Cities";
import Ionicons from "@expo/vector-icons/Ionicons";
import PlaceCard from "../components/PlaceCard";
import { useLayoutEffect } from "react";
import * as Clipboard from "expo-clipboard";
import IconButton from "../components/IconButton";

export default function CitiesDetailScreen({ route, navigation }) {
  const cityId = route.params.cityId;

  const selectedCity = CITIES.find((city) => city.id === cityId);

  const handleCopyToClipboard = async () => {
    await Clipboard.setStringAsync(selectedCity.detail);
    Alert.alert("Copied!", "Text copied to clipboard.");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCity.name,
      headerRight: () => (
        <IconButton
          icon="clipboard-outline"
          onPress={handleCopyToClipboard}
          color="#0f0700"
        />
      ),
    });
  }, [selectedCity, navigation]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} src={selectedCity.imgSrc} />
      <View style={styles.detailsContainer}>
        <View style={styles.detailsComponent}>
          <Ionicons name="compass-outline" size={30} color="#36454F" />
          <Text style={styles.region}>{selectedCity.region}</Text>
        </View>
        <View style={styles.detailsComponent}>
          <Ionicons name="people-circle-outline" size={30} color="#36454F" />
          <Text style={styles.population}>{selectedCity.population}M</Text>
        </View>
      </View>
      <View style={styles.detailsDefinitionContainer}>
        <Text style={styles.header}>{selectedCity.name}</Text>
        <Text style={styles.detail}>{selectedCity.detail}</Text>
      </View>
      <View style={styles.placesContainer}>
        {selectedCity.touristicPlaces.map((place) => (
          <PlaceCard key={place.id} {...place} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 350,
    marginBottom: 24,
  },
  detailsContainer: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  detailsComponent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  region: {
    textTransform: "uppercase",
    fontWeight: 700,
    color: "#36454F",
    fontSize: 16,
  },
  population: {
    fontSize: 16,
    color: "#36454F",
    fontWeight: 600,
  },
  detail: {
    color: "#161c20",
    fontSize: 16,
  },
  detailsDefinitionContainer: {
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  header: {
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 8,
  },
  placesContainer: {
    paddingHorizontal: 12,
    gap: 12,
    marginBottom: 32,
  },
});
