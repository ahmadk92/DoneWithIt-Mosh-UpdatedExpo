import React, { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import { TextInput, View } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <LoginScreen />
    // <Screen>
    //   <TextInput secureTextEntry placeholder="Pass" />
    // </Screen>
  );
}
