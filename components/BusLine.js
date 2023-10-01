import React from "react";
import { StyleSheet,View } from "react-native";
import BusLineCard from "./BusLineCard"; // Import your BusLineCard component
import { useNavigation } from "@react-navigation/native";

const BusLine = () => {
  const navigation = useNavigation();

  const busLines = [
    { id: 1, name: "Bus Line 1", description: "Description of Bus Line 1" },
    { id: 2, name: "Bus Line 2", description: "Description of Bus Line 2" },
    // Add more bus lines as needed
  ];

  const handleCardPress = (busLine) => {
    navigation.navigate("BusLineDetail", { busLine });
  };

  return (
    <View>
      {busLines.map((busLine) => (
        <BusLineCard
          key={busLine.id}
          busLine={busLine}
          onPress={() => handleCardPress(busLine)}
        />
      ))}
    </View>
  );
};


export default BusLine;
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
  