import React from "react";
import { StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

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
        <ListItem.Title style={styles.t} numberOfLines={1}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          ABC
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  t: { fontSize: 20, fontWeight: "700" },
});
export default CustomListItem;
