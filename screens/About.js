import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const AboutScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>About</Text>
        <Button
          onPress={() => {
            navigation.navigate("Home");
          }}
          title="Go To Home"
        />
        <Button
          onPress={() => {
            navigation.toggleDrawer();
          }}
          title="Toggle Menu"
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  export default AboutScreen