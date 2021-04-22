import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
// import { ScrollView} from "react-native-gesture-handler";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.chatName,
    });
  }, [navigation]);

  const sendMessage = () => {
    alert("yooo");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={90}
        style={styles.con}
      >
        <>
          <ScrollView></ScrollView>
          <View style={styles.footer}>
            <TextInput
              placeholder="Enter a message"
              value={input}
              onChangeText={(text) => setInput(text)}
              style={{
                flex: 1,
                padding: 10,
                outline: "none",
                backgroundColor: "#ececec",
                margin: 10,
              }}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
              <Ionicons name="send" size={24} color="#2b68e6" />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  con: {
    flex: 1,
  },
});
