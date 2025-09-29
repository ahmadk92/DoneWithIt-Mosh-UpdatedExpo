import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.description}
              image={item.image}
              onPress={() => console.log("message selected", item)}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default MessagesScreen;
