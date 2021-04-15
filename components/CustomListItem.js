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
        <ListItem.Title style={{ fontSize: 10, fontWeight: "900" }}>
          <Text h3>hi</Text>
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;
