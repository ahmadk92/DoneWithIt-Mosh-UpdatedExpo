import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaViewBase, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      {/* <Image source={require("./assets/favicon.png")} /> */}
      <Image
        blurRadius={5}
        fadeDuration={5000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
