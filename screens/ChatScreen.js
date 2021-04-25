import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState, useRef } from "react";

import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard,
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
        message: input.trim(),
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
  const scrollViewRef = useRef();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView style={styles.con}>
        <>
          <ScrollView
            style={{ zIndex: 0 }}
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
            horizontal={false}
          >
            <View style={{ height: 20 }}></View>
            {messages.map(({ id, data }) =>
              data.email === auth.currentUser.email ? (
                <View
                  key={id}
                  style={{
                    padding: 15,
                    paddingTop: 5,
                    backgroundColor: "#d0f2d3",
                    alignSelf: "flex-start",
                    borderRadius: 10,
                    borderTopLeftRadius: 0,

                    marginLeft: 15,
                    marginBottom: 20,
                    maxWidth: 300,
                    position: "relative",
                  }}
                >
                  <Text style={styles.rn}>You</Text>
                  <Text style={styles.chat}>{data.message}</Text>
                </View>
              ) : (
                <View
                  style={{
                    padding: 15,
                    paddingTop: 5,
                    backgroundColor: "#ececec",
                    alignSelf: "flex-end",
                    borderRadius: 10,
                    borderTopRightRadius: 0,
                    marginRight: 15,
                    marginBottom: 20,
                    maxWidth: "80%",
                    position: "relative",
                  }}
                >
                  <Text style={styles.rn}>{data.displayName}</Text>
                  <Text style={styles.chat}>{data.message}</Text>
                </View>
              )
            )}
            <View style={{ height: 50 }}></View>
          </ScrollView>

          <View style={styles.footer}>
            <TextInput
              placeholder="Enter a message"
              value={input}
              multiline
              onChangeText={(text) => setInput(text)}
              underlineColorAndroid="transparent"
              style={{
                flex: 1,
                padding: 10,
                outline: "none",
                maxHeight: 200,
                backgroundColor: "#ececec",
                marginRight: 15,
                borderRadius: 20,
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
    position: "absolute",
    padding: 2,
    left: 0,
    bottom: 10,
    zIndex: 1,
  },
  rn: {
    fontSize: 14,
    fontWeight: "700",
  },
  chat: {
    fontSize: 16,
  },
  con: {
    flex: 1,
    bottom: 0,
  },
});
