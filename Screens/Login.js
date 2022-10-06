import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useCallback, useState } from "react";
import { Input } from "../Components/Input";
import { Styles } from "../Components/Style";
import Button from "../Components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const login = ({ navigation }) => {
  const [pasword, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(true);

  console.log(visible);
  const handleSubmit = useCallback(() => {
    if (!email) {
      Alert.alert("Please Enter Email");
    } else if (!pasword) {
      Alert.alert("Please Enter pass");
    } else {
      navigation.navigate("Splash");
    }
  }, [email, pasword]);
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
          <Input
            elogo={
              <MaterialCommunityIcons name="email" size={24} color="black" />
            }
            tTxt="Enter Email"
            value={email}
            setValue={setEmail}
            phold="Type Here"
          />
          <Input
            paslogo={<AntDesign name="minuscircle" size={24} color="black" />}
            tTxt="Enter Password"
            value={pasword}
            setValue={setPasword}
            phold="Type Here"
            security={visible}
            hidelogo={
              <TouchableOpacity
                onPress={() => {
                  setVisible(!visible);
                }}
              >
                <Ionicons
                  name={visible ? "eye-outline" : "eye-off-outline"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            }
          />
          <Text style={{ marginTop: 20 }}>
            <TouchableOpacity>
              <Text> Forget Password</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleSubmit()}>
          <Button title="Create Account" naviate="SignUp" />
        </TouchableOpacity>
        <View>
          <Text style={{ alignSelf: "center", marginTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text>Create New Account</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
