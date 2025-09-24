import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  deleteIcon: {
    backgroundColor: "#4ecdc4",
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  login: {
    backgroundColor: "tomato",
    width: 50,
    height: 50,
  },
  signout: {
    backgroundColor: "green",
    width: 50,
    height: 50,
  },
});

export default ViewImageScreen;
