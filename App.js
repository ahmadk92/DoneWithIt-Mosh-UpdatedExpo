import { Text, View } from "react-native";

import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import AppText from "./app/components/AppText";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    <ListingDetailsScreen />
  );
}
