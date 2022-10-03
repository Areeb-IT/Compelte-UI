import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Button from "../Components/Button";
import { Styles } from "../Components/Style";
const Splash = ({ navigation }) => {
  return (
    <View style={styles.splash}>
      <View style={{ alignItems: "center" }}>
        <Text style={Styles.header}>Find Your Gadget</Text>
      </View>
      <View style={{ height: 300, marginTop: 80, alignItems: "center" }}>
        <Image
          style={{ width: "90%", height: 300 }}
          source={require("../assets/11.png")}
        />
      </View>
      <Button title="Get Started" naviate="Login" bgc="#5956E9" txt="white" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: "#5956E9",
    paddingHorizontal: 20,
  },
});
