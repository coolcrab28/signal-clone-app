import React, { useEffect, useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpass, setConPass] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#2c96ed" },
      headerTitleStyle: {
        color: "white",
        alignSelf: "center",
        marginRight: 50,
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

  const register = () => {
    if (name === "" || email === "" || password === "" || conpass === "") {
      alert("Please fill in all the inputs");
    } else {
      //   auth
      //     .createUserWithEmailAndPassword(email, password)
      //     .then((authUser) => {
      //       authUser.user.updateProfile({
      //         displayName: name,
      //         photoURL: "",
      //       });
      //       navigation.replace("Home");
      //     })
      //     .catch((error) => {
      //       alert(error.message);
      //     });
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.main}>
      <Text h3>Register</Text>
      <View style={{ height: 50 }}></View>
      <View style={styles.inpCon}>
        <Input
          placeholder="Name"
          type="text"
          autoCapitalize="none"
          style={{ outline: "none" }}
          spellCheck="false"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          autoCapitalize="none"
          spellCheck="false"
          style={{ outline: "none" }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Password"
          type="password"
          autoCapitalize="none"
          spellCheck="false"
          style={{ outline: "none" }}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Input
          placeholder="Confirm Password"
          type="password"
          autoCapitalize="none"
          spellCheck="false"
          style={{ outline: "none" }}
          secureTextEntry
          value={conpass}
          onChangeText={(text) => setConPass(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        raised
        title="Register"
        onPress={register}
        containerStyle={styles.btn}
        buttonStyle={{
          backgroundColor: "#2c96ed",
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  btn: {
    width: 200,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inpCon: {
    width: 300,
  },
});
