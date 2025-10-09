import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";


const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name = "Listings" component={ListingScreen}/>
        <Tab.Screen name = "ListingEdit" component={ListingEditScreen}/>
        <Tab.Screen name = "Account" component={AccountScreen}/>
    </Tab.Navigator>
);


export default AppNavigator;