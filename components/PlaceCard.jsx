import { Image, StyleSheet, Text, View } from "react-native";

export default function PlaceCard({ id, imgSrc, name }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} src={imgSrc} />
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    gap: 12,
    backgroundColor: "#e6e6e6",
    borderRadius: 16,
    padding: 8,
  },
  image: {
    height: "100%",
    width: 160,
    borderRadius: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
    width: 180,
  },
});
