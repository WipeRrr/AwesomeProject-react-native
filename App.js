import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
const backgroundImage = require("./assets/images/bg.jpg");

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const changeScreenFunction = (value) => {
    setActiveScreen(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        >
          {activeScreen === 0 ? (
            <LoginScreen changeScreen={changeScreenFunction} />
          ) : (
            <RegistrationScreen changeScreen={changeScreenFunction} />
          )}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
