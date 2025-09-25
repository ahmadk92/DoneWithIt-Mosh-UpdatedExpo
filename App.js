import { Text, View } from "react-native";

import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red jacket for sale!"
        subtitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
