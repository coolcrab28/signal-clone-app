import React, { useLayoutEffect } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#fff" },
      headerLeft: null,
      headerTitleStyle: {
        color: "black",
        alignSelf: "center",
      },
      headerTintColor: "black",
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <StatusBar style="dark"></StatusBar>
      <ScrollView>
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
