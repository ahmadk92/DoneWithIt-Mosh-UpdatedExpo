import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Screen({ children, style }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.screen, style]} edges={["top"]}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default Screen;
