import axios from "axios";
import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Main from "./main";
import GlobalContext from "../context/globalContext";

export default function Login() {

    const context = React.useContext(GlobalContext);


    const [ error,setError ] = React.useState("")


    const [email,setEmail] = React.useState();
    const [password,setPassword] = React.useState();

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Digite suas credenciais</Text>
      <TextInput
        style={[styles.input,StyleSheet.create({marginTop:64})]}
        placeholder="Usuario"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button color="#fff" title="Logar" onPress={()=>{
          verifyLogin(email,password)
            .then(response =>{
                if(!response.data.token){
                    setError("Erro, tente novamente.")
                }else{
                    context[1]({...context[0],user:{token:response.data.token}})
                    context[0].app.screen.setScreen(Main);
                }
            })
            .catch( err => console.log(err) && setError("Login inválido"))
        }}/>
      <Text style={styles.error}>{ error }</Text>
    </View>
  );
}


async function verifyLogin(email,password){
    const response = await axios.post('https://delivery.leaderaplicativos.com.br/api/api-token-auth/',{email,password})
    return response;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00f",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 120,
    paddingTop: 300,
  },
  error:{
    color: '#f00',
    fontWeight:'bold',
    fontSize:18
  },
  input:{
      height: 40,
      margin: 12,
      borderWidth:1,
      borderColor:'#fff',
      width: '70%',
      padding: 10,
      color: '#fff',
      fontWeight:'bold',
      textAlign:'center'
  },
  titlePage: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
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
