import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import CitiesScreen from "./screens/CitiesScreen";
import AboutScreen from "./screens/AboutScreen";
import CitiesDetailScreen from "./screens/CitiesDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator id="StackNavigator" initialRouteName="MainMenu">
          <Stack.Screen name="MainMenu" component={MainScreen} />
          <Stack.Screen name="Cities" component={CitiesScreen} />
          <Stack.Screen name="CitiesDetail" component={CitiesDetailScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
