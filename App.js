import React, { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import { TextInput, View } from "react-native";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <MessagesScreen />
  );
}
