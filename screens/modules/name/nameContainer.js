import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NameContainer() {
  const contexto = React.useContext(userContext)[0];

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.name}>{contexto.name}</Text>
        <Text style={styles.job}>{contexto.job}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  wrapper: {
    backgroundColor: "#00f",
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderColor: "#ff0",
    borderWidth: 4,
    padding: 20,
    width: "95%",
  },
  name: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
  job: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
