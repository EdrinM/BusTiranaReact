import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const BusLineCard = ({ busLine, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, style]}>
        <Text>{busLine.name}</Text>
        <Text>{busLine.description}</Text>
        {/* Add other card content here */}
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  card: {
    width: "80%", // Set the desired width
    alignSelf: "center",
    padding: 20,
    borderRadius: 20,
    borderWidth: 10,
    borderColor: "#22222",
    marginBottom: 12,
    backgroundColor: "#123123", // Default background color
  },
};

export default BusLineCard;
