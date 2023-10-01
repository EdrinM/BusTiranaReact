import React from "react";
import { View, Text } from "react-native";

const BusLineDetail = ({ route }) => {
  const { busLine } = route.params;

  return (
    <View>
      <Text>Bus Line Name: {busLine.name}</Text>
      <Text>Description: {busLine.description}</Text>
      {/* Add more details here */}
    </View>
  );
};

export default BusLineDetail;
