import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View>
      <View style={styles.cardOne}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={{ width: 50, height: 50, borderRadius: 10, marginLeft: 9 }}
        />
        <View>
          <Text>Hi Good Morning</Text>
          <Text>Crisha sins</Text>
        </View>
      </View>
      <View>
        <Text>kam kore</Text>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  cardOne: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: `#00FFFF`,
    marginHorizontal: 10,
    height: 80,
    alignItems: "center",
    gap: 15,
    borderRadius: 15,
    shadowColor: "#00FFFF",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 10,
    shadowRadius: 15,
    elevation: 7,
  },
});
