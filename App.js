import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { useFonts } from "expo-font";


export default function App() {

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });



 if (!fontsLoaded) {
   return null;
 }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontFamily: "Roboto-Medium", fontSize: 30 }}>
        Hello All
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
