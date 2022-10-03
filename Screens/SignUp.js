import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Styles } from "../Components/Style";
import Input from "../Components/Input";
import Button from "../Components/Button";
const SignUp = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#5956E9" }}>
      <View style={{ flex: 0.3, backgroundColor: "#5956E9" }}>
        <View style={{ alignItems: "center" }}>
          <Text style={Styles.header}>Register</Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.7,
          backgroundColor: "white",
          borderRadius: 20,
          paddingHorizontal: 40,
        }}
      >
        <Text style={{ fontSize: "18", fontWeight: "700", marginTop: 20 }}>
          SignUp
        </Text>
        <Input tTxt="enter emil" />
        <Input tTxt="create pass" ttt="show" />
        <Input tTxt="confirm pass" ttt="show" />
        <Button title="Back to beginning" naviate="Splash" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
