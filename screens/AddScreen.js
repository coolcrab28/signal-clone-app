import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { Icon } from "react-native-elements";
import { db } from "../firebase";
const AddScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a chat",
      headerTitleStyle: {
        color: "black",
        alignSelf: "center",
        marginRight: 50,
      },
    });
  }),
    [navigation];

  const [input, setInput] = useState("");

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <View style={styles.con}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
        onSubmitEditing={createChat}
      />
      <Button onPress={createChat} title="Create Chat" />
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  con: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
