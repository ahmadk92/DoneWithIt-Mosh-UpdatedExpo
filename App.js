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
  Dimensions,
  useWindowDimensions
} from "react-native";


import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const handlePress = () => console.log("Button preesd");

  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  console.log("width:",width,"height:",{height});
  console.log(`isLandscape: ${isLandscape}`)
  
  
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
