import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const Passbtn = (props) => {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <View>
      <Ionicons
        name={visible ? "eye-outline" : "eye-off-outline"}
        size={24}
        secureTextEntry={visible}
        color="black"
        style={{ justifyContent: "flex-end", marginTop: 10 }}
      />
    </View>
  );
};

export default Passbtn;

const styles = StyleSheet.create({});
