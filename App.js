import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const handlePress = () => console.log("Button preesd");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="click me"
        onPress={() => alert("Button is preesed")}
        color="orange"
      />
      <Button
        title="click me for Alert"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
      <Button
        title="click me for prompt"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
          // not working on android!
        }
        color="purple"
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
