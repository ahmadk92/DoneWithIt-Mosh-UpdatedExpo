import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
const requestPermission = async () => {
  const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  console.log(granted)
  if (!granted) alert("You need to enable permission to use app");
};

export default function App() {
  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}
