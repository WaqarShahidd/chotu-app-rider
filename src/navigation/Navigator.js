import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Rider/Screens/Login";
import BottomNavigator from "./BottomNavigator";
import MapModal from "../Rider/Screens/MapModal";
import OrderDetail from "../Rider/Screens/OrderDetail";
import Menu from "../Rider/Screens/Menu";
import Shifts from "../Rider/Screens/Shifts";
import ChatScreen from "../Rider/Screens/ChatScreen";
import FleetManagerNavigator from "./FleetManagerNavigator";

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Group>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="Bottom" component={BottomNavigator} />
          <Stack.Screen name="OrderDetail" component={OrderDetail} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Shifts" component={Shifts} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="FleetBottom" component={FleetManagerNavigator} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
