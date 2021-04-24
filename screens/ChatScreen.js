import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { db, auth } from "../firebase";
import * as firebase from "firebase";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.chatName,
    });
  }, [navigation]);

  const sendMessage = () => {
    if (input.trim()) {
      Keyboard.dismiss();
      db.collection("chats").doc(route.params.id).collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
      });
      setInput("");
    }
  };

  useLayoutEffect(() => {
    const unsub = db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return unsub;
  }, [route]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView style={styles.con}>
        <TouchableWithoutFeedback>
          <>
            <ScrollView>
              <View style={{ height: 20 }}></View>
              {messages.map(({ id, data }) =>
                data.email === auth.currentUser.email ? (
                  <View
                    key={id}
                    style={{
                      padding: 15,
                      backgroundColor: "yellow",
                      alignSelf: "flex-start",
                      borderRadius: 10,
                      borderTopLeftRadius: 0,
                      height: 43,
                      marginLeft: 15,
                      marginBottom: 20,
                      // maxWidth: "80%",
                      position: "relative",
                    }}
                  >
                    <Text>{data.message}</Text>
                  </View>
                ) : (
                  <View
                    style={{
                      padding: 15,
                      paddingTop: 0,
                      backgroundColor: "#ececec",
                      alignSelf: "flex-end",
                      borderRadius: 10,
                      borderTopRightRadius: 0,
                      height: 43,
                      marginRight: 15,
                      marginBottom: 20,
                      // maxWidth: "80%",
                      position: "relative",
                    }}
                  >
                    <Text Style={{ fontSize: 2 }}>{data.displayName}</Text>
                    <Text>{data.message}</Text>
                  </View>
                )
              )}
            </ScrollView>
            <View style={styles.footer}>
              <TextInput
                placeholder="Enter a message"
                value={input}
                onChangeText={(text) => setInput(text)}
                underlineColorAndroid="transparent"
                style={{
                  flex: 1,
                  padding: 10,
                  outline: "none",
                  backgroundColor: "#ececec",
                  bottom: 0,
                  height: 40,
                  marginRight: 15,
                  borderRadius: 20,
                }}
              />
              <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
                <Ionicons name="send" size={24} color="#2b68e6" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
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
    bottom: 0,
  },
  reciever: {
    padding: 15,
    backgroundColor: "#ececec",
    // alignItems: "flex-start",
    borderRadius: 20,
    // width: 100,
    marginRight: 15,
    marginBottom: 20,
    // maxWidth: "80%",
    position: "relative",
  },
});
