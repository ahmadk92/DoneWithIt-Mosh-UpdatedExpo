import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text is pressed.");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log("Text preesed!")}>
        Hello React Native! this is a long text, even longer and longer, and I'm
        not sure the end of this text will be at the same line or not!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
