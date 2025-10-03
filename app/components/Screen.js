import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Screen({ children, style }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex:1,
  },
});
export default Screen;
