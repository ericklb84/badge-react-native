import React from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import { Button } from "react-native";
import GlobalContext from "../context/globalContext";
import Login from "./login";

const Splash = () => {
  const context = React.useContext(GlobalContext);

  console.log(context);

  const [state, setState] = React.useState(false);

  setTimeout(function () {
    setState(true);
  }, 3000);

  const clickHandle = () => context[0].app.screen.setScreen(Login);

  const imageUri = "https://reactnative.dev/img/tiny_logo.png";

  return (
    <View style={styles.container}>
      <Image
        style={StyleSheet.create({ height: 85, width: 118 })}
        source={require("../assets/modular-simbolo-branco.png")}
      />
      {state ? (
        <Button
          title="Efetuar o login"
          color="#fff"
          style={styles.loginButton}
          onPress={() => clickHandle()}
        />
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00f",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 120,
    paddingTop: 200,
  },
  loginButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

export default Splash;
