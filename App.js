import React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation(); // must use the useNavigation hook to have access navigation object, because Link is not in Stack.Screen
  return (
    <View style={{marginTop:20}}>
      <Button
        title="click"
        onPress={() => navigation.navigate("TweetsDetails")}
      />
    </View>
  );
};

const Tweets = (
  { navigation } // have access to navigation object, because Tweets component is in Stack.Screen
) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="Tweets Detail"
      onPress={() => navigation.navigate("TweetsDetails")}
    />
    <Link />
  </Screen>
);

const TweetsDetails = () => (
  <Screen>
    <Text>TweetsDetails</Text>
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
