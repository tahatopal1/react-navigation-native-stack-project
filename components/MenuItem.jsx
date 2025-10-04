import { Pressable, StyleSheet, Text } from "react-native";

export default function MenuItem({ children, onClick }) {
  return (
    <Pressable style={styles.item} onPress={onClick}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexBasis: 100,
    padding: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    elevation: 6,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
  },
});
