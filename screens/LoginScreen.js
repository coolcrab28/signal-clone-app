import React, { useEffect, useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#2c96ed" },
      headerTitleStyle: {
        color: "white",
        alignSelf: "center",
      },
      headerTintColor: "white",
    });
  }, [navigation]);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsub;
  }, []);

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then()
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.main}>
      <StatusBar style="light" color="#2c96ed" />
      <View style={{ height: 40 }}></View>
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/600px-Signal-Logo.svg.png",
        }}
        style={{ height: 150, width: 150, borderRadius: 20 }}
      />
      <View style={{ height: 20 }}></View>
      <View style={styles.inpCon}>
        <Input
          placeholder="Email"
          type="email"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={login}
        />
      </View>

      <Button
        containerStyle={styles.btn}
        title="Login"
        onPress={login}
        buttonStyle={{
          backgroundColor: "#2c96ed",
        }}
      />
      <View style={{ height: 5 }}></View>
      <Text style={{ alignSelf: "center" }}>or</Text>
      <Button
        containerStyle={styles.btn}
        type="outline"
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    width: 200,
    marginTop: 10,
  },
  inpCon: {
    width: 300,
  },
});
