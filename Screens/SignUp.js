import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useCallback } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Styles } from "../Components/Style";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { Ionicons } from "@expo/vector-icons";
const SignUp = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  const [pasword, setPasword] = useState("");
  const [pasword1, setPasword1] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = useCallback(() => {
    if (!email) {
      Alert.alert("Please Enter Email");
    } else if (!pasword) {
      Alert.alert("Please Enter pass");
    } else if (!pasword1) {
      Alert.alert("Please confirm pass");
    } else {
      navigation.navigate("Login ");
    }
  }, [email, pasword, pasword1]);
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
        <Input
          tTxt="enter emil"
          phold="Type Here"
          value={email}
          setValue={setEmail}
          elogo={
            <MaterialCommunityIcons name="email" size={24} color="black" />
          }
        />
        <Input
          tTxt="create pass"
          phold="Type Here"
          value={pasword}
          setValue={setPasword}
          paslogo={<AntDesign name="minuscircle" size={24} color="black" />}
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
        <Input
          tTxt="confirm pass"
          value={pasword1}
          setValue={setPasword1}
          phold="Type Here"
          paslogo={<AntDesign name="minuscircle" size={24} color="black" />}
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
        <TouchableOpacity onPress={() => handleSubmit()}>
          <Button title="Back to Beginning" naviate="Splash" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
