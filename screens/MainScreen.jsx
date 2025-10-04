import { StyleSheet, View } from "react-native";
import MenuItem from "../components/MenuItem";

export default function MainScreen({ navigation }) {
  function navigationHandler(page) {
    navigation.navigate(page);
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <MenuItem
          onClick={() => {
            navigationHandler("Cities");
          }}
        >
          Cities
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigationHandler("About");
          }}
        >
          About
        </MenuItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  itemsContainer: {
    flexBasis: "30%",
    gap: 20,
    justifyContent: "space-between",
    transform: [{ translateY: -50 }],
  },
});
