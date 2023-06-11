import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/roboto-bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/roboto-medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/roboto-regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/bg.jpg")}
      >
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  text: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "white"
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
});
