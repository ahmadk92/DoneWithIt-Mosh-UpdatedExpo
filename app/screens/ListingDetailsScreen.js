import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.image}
        source={{ uri: listing.images[0].url }}
        placeholder={{ uri: listing.images[0].thumbnailUrl }}
        transition={500}
        cachePolicy="disk"
      />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
      </View>

      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subtitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
    flex: 1,
  },
});
export default ListingDetailsScreen;
