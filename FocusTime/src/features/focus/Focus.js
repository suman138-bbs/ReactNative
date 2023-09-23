import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.2,
    padding: 10,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  inputContainer: {
    paddingTop: 20,
  },
});
