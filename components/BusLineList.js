import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import BusLineCard from "./BusLineCard";

const BusLineList = ({ busLines }) => {
  const navigation = useNavigation(); // Initialize navigation

  const handleCardClick = (busLine) => {
    // Navigate to the BusLineDetail screen with the selected bus line data
    navigation.navigate("BusLineDetail", { busLine });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.listTitle}>Bus Lines</Text>
      <FlatList
        data={busLines}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardClick(item)}>
            <BusLineCard busLine={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles for your card
});

export default BusLineList;
