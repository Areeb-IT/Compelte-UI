import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Styles } from "./Style";
import { Ionicons } from "@expo/vector-icons";

export const Input = (props) => {
  const sec = props.security;
  const bTitle = props.tTxt;
  const values = props.value;
  const setvalue = props.setValue;
  const emaillogo = props.elogo;
  const passlogo = props.paslogo;
  const pholder = props.phold;
  const showlogo = props.hidelogo;

  return (
    <View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ marginVertical: 10, color: "#868686" }}>
          {emaillogo}
          {passlogo}
          {bTitle}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          height: 40,
          borderBottomWidth: 2,
          justifyContent: "center",
        }}
      >
        <Text style={{ alignSelf: "flex-end" }}>{showlogo}</Text>
        <TextInput
          placeholder={pholder}
          style={Styles.textInput}
          value={values}
          onChangeText={setvalue}
          secureTextEntry={sec}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
