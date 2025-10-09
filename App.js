import React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons} from "@expo/vector-icons";

import Screen from "./app/components/Screen";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="Tweets Detail"
      onPress={() => navigation.navigate("TweetsDetails", { id: 1 })}
    />
  </Screen>
);

const TweetsDetails = ({ route }) => (
  <Screen>
    <Text>TweetsDetails {route.params.id}</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTitleAlign: "center",
        headerTintColor: "white",
      }}
    />
    <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "#eee",
      tabBarInactiveTintColor: "black",
    }}
  >
    <Tab.Screen 
    name="Feed" 
    component={Tweets}
    options={{
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>
    }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
