import { StyleSheet, View } from "react-native";
import { CITIES } from "../data/Cities";
import CityCard from "../components/CityCard";

export default function CitiesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {CITIES.map((city) => (
        <CityCard key={Math.random()} {...city} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 32,
    gap: 40,
  },
});
