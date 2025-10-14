import React from "react";
import NetInfo from '@react-native-community/netinfo'

export default function App() {
  // NetInfo.fetch().then(net => console.log(net))
  
  const unsubscribe = NetInfo.addEventListener(netInfo => console.log(netInfo))
  return null;
}
