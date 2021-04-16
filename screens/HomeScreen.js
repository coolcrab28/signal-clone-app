import React, { useLayoutEffect } from "react";
import { ScrollView, SafeAreaView, TouchableOpacity, TouchableOpacityBase } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { StatusBar } from "expo-status-bar";
import { View , Text , Button} from "react-native";
import { Avatar } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerLeft: () => (
            <View style={{marginLeft:20}}>
              <TouchableOpacity>

              <Avatar
              rounded
              source={{
                uri:
                "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
              }}
              />
              </TouchableOpacity>
            </View>
      ),
      headerTitleStyle: {
        color: "black",
        alignSelf: "center",
      },
      // headerTintColor: "black",
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
