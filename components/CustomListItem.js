import React from "react";
import { ListItem, Avatar, Text } from "react-native-elements";

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri:
            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        }}
      />

      <ListItem.Content>
        <ListItem.Title style={{ fontSize: 20, fontWeight: "900" }}>
          <Text>My Chat</Text>
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          this is a test message . this is just to make it very very long and even longer!!
          bbv
          bvbvddddddddddddddddddddddddddddddddddddddddddddddddddd
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;
