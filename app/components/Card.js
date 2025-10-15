import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Image } from "expo-image";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subtitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}          // no need to change, source is the same as ImageUrl in mosh code
          placeholder={{ uri: thumbnailUrl }} // same as preview in mosh code
          transition={500} // same as tint prop in mosh code
          cachePolicy="disk" // add this to have the cache feature
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subtitle} numberOfLines={2}>
            {subtitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
