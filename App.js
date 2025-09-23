import { View } from "react-native";

export default function App() {
  return (
    <View style={{
       backgroundColor: "white", flex: 1 }}>
      
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 2,
        }}
      />

      <View
        style={{
          backgroundColor: "yellow",
          flex: 1,
        }}
      />

      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />

    </View>
  );
}
