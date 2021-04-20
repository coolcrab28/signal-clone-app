import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";
import { Avatar } from "react-native-elements";
import { auth, db } from "../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const HomeScreen = ({ navigation }) => {
  const userName = auth.currentUser.displayName;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerLeft: () => (
        <View style={{ marginLeft: 20, flexDirection: "row" }}>
          <TouchableOpacity onLongPress={logOut} onPress={pressed}>
            <Avatar
              rounded
              source={{
                uri:
                  "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: Dimensions.get("window").width / 10 }}
            onPress={() => {
              navigation.navigate("AddChat");
            }}
            onLongPress={() => {
              alert("Add A Chat");
            }}
          >
            <SimpleLineIcons name="pencil" size={26} color="black" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <Text>{userName}</Text>
        </View>
      ),
      headerTitleStyle: {
        color: "black",
        alignSelf: "center",
      },
      // headerTintColor: "black",
    });
  }, [navigation]);

  const [chats, setChats] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return unsubscribe;
  }, []);

  const logOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  const pressed = () => {
    alert("Long Press to log Out");
  };
  return (
    <SafeAreaView>
      <StatusBar style="dark"></StatusBar>
      <ScrollView style={{ height: "100%" }}>
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem key={id} id={id} chatName={chatName} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
