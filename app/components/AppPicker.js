import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, selectedItem, placeholder, onSelectItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    color: defaultStyles.colors.medium,
    marginRight: 10,
  },
  placeholder: {
     color: defaultStyles.colors.medium 
  },
  text: {
    flex: 1,
  },
});
export default AppPicker;
