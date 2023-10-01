import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BusLine from "./BusLine"; // Import your BusLine component
import BusLineDetail from "./BusLineDetail"; // Import your BusLineDetail component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BusLine">
      <Stack.Screen name="BusLine" component={BusLine} />
      <Stack.Screen name="BusLineDetail" component={BusLineDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
