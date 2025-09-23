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
  Platform,
  StatusBar,
  Dimensions
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const handlePress = () => console.log("Button preesd");
  console.log(Dimensions.get('screen'));
  console.log(Dimensions.get('window'));
  
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor:"dodgerblue",
          width: '50%',
          height: 70,
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
});
