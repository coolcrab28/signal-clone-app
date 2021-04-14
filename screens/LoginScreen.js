import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  return (
    <View style={styles.con}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://blog.mozilla.org/internetcitzen/files/2018/08/signal-logo.png",
        }}
        style={{ height: 200, width: 200 }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  head: {
    fontSize: 24,
  },
  con: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
