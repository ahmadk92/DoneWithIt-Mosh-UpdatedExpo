import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

function AppPicker({ icon, placeholder, ...otherProbs }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons name="chevron-down" size={20}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    color: defaultStyles.colors.medium,
    marginRight: 10,
  },
  text:{
    flex:1
  }
});
export default AppPicker;
