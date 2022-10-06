import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "./Style";
export const Button = (props) => {
  const navigation = useNavigation();
  const name = props.title;
  const bgclr = props.bgc;
  const text = props.txt;

  return (
    <View
      style={[
        Styles.button,
        { backgroundColor: bgclr == "#5956E9" ? "white" : "#5956E9" },
      ]}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: text == "white" ? "#5956E9" : "white",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
