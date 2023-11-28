import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import CartScreen from "../screens/CartScreen";
import OrderPrepairingScreen from "../screens/OrderPrepairingScreen";
import DeliveryScreen from "../screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Delivery"
          options={{ presentation: "fullScreenModal" }}
          component={DeliveryScreen}
        />
        <Stack.Screen
          name="OrderPrepairing"
          options={{ presentation: "fullScreenModal" }}
          component={OrderPrepairingScreen}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
