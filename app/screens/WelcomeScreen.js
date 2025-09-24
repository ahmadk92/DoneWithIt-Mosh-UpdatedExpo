import React from "react";
import { View, Image, ImageBackground, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>sell what you don't need</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 70,
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    flex: 1,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#4ecdc4",
    width: "100%",
    height: 70,
  },
});

export default WelcomeScreen;
