import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Styles } from "./Style";

export const Input = (props) => {
  const bTitle = props.tTxt;
  const Show = props.ttt;
  return (
    <View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ marginVertical: 10, color: "#868686" }}>{bTitle}</Text>
        <Text style={{ alignSelf: "flex-end" }}>{Show}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput style={Styles.textInput} />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
