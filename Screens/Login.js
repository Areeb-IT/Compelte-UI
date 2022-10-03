import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Input } from "../Components/Input";
import { Styles } from "../Components/Style";
import Button from "../Components/Button";
const login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#5956E9" }}>
      <View style={{ flex: 0.35, backgroundColor: "#5956E9" }}>
        <View style={{ alignItems: "center" }}>
          <Text style={[Styles.header, { marginTop: 80 }]}>Welcome Back</Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.65,
          backgroundColor: "white",
          borderRadius: 20,
          paddingHorizontal: 40,
        }}
      >
        <Text style={{ fontSize: "18", fontWeight: "700", marginTop: 20 }}>
          Login
        </Text>
        <View>
          <Input tTxt="enter emil" />
          <Input tTxt="Enter Password" ttt="Show" />
          <Text style={{ marginTop: 20 }}>Forget Password</Text>
        </View>
        <Button title="Create Account" naviate="SignUp" />
        <View>
          <Text style={{ alignSelf: "center", marginTop: 10 }}>
            Create New Account{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
