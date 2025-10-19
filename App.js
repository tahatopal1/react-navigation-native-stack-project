import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CitiesScreen from "./screens/CitiesScreen";
import AboutScreen from "./screens/AboutScreen";
import CitiesDetailScreen from "./screens/CitiesDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        id="drawer"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#e0c9b3",
          },
          headerTintColor: "#0f0700",
          sceneStyle: {
            backgroundColor: "#cba580",
          },
          drawerContentStyle: { backgroundColor: "#cba580" },
          drawerInactiveTintColor: "#0f0700",
          drawerActiveTintColor: "#cba580",
          drawerActiveBackgroundColor: "#0f0700",
        }}
      >
        <Drawer.Screen
          name="Cities"
          component={CitiesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="help-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          id="StackNavigator"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#e0c9b3",
            },
            headerTintColor: "#0f0700",
            contentStyle: {
              backgroundColor: "#cba580",
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CitiesDetail"
            component={CitiesDetailScreen}
            options={{
              title: "City Details",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
