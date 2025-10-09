import React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";



const Tweets = (
  { navigation } 
) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="Tweets Detail"
      onPress={() => navigation.navigate("TweetsDetails", {id:1})}
    />
  </Screen>
);

const TweetsDetails = ({route}) => (
  <Screen>
    <Text>TweetsDetails {route.params.id}</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
