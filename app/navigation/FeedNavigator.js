import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";


const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator  screenOptions={{presentation:"modal", animation:"slide_from_bottom", headerShown:false}}>
        <Stack.Screen name="Listings" component={ListingScreen}/>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}/>
    </Stack.Navigator>
);

export default FeedNavigator;