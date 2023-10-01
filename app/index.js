import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "../components/AppNavigator"; // Import your main navigation component
import BusLineList from "../components/BusLineList";

export default function App() {
  const busLines = [
    { id: 1, name: "Bus Line 1", description: "Description of Bus Line 1" },
    { id: 2, name: "Bus Line 2", description: "Description of Bus Line 2" },
    // Add more bus lines as needed
  ];

  return (
    <NavigationContainer independent={true}>
      <AppNavigator /> {/* Render your main navigation component */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
});
