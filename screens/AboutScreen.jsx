import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.icon}
        name="navigate-circle-outline"
        size={90}
        color="green"
      />
      <Text style={styles.header}>About the Project</Text>
      <Text style={styles.detail}>
        This is a simple project for showcasing the React Navigation's Native
        Stack navigator in the context of cities from Türkiye!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    transform: [{ translateY: -64 }],
    paddingHorizontal: 24,
    alignItems: "center",
  },
  icon: { marginBottom: 24 },
  header: {
    textAlign: "center",
    marginBottom: 28,
    fontWeight: 700,
    fontSize: 24,
  },
  detail: {
    textAlign: "center",
    fontSize: 16,
  },
});
