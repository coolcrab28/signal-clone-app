import React from "react";
import { ListItem, Avatar, Text } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem
      key={id}
      bottomDivider
      key={id}
      onPress={() => {
        enterChat(id, chatName);
      }}
    >
      <Avatar
        rounded
        source={{
          uri:
            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        }}
      />

      <ListItem.Content>
        <ListItem.Title style={{ fontSize: 20, fontWeight: "900" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          ABC
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;
