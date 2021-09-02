import React from "react";
import { View, Text, StyleSheet,ActivityIndicator } from "react-native";
import userContext from "../context/userContext";
import userData from '../fakeAPI/user'
import Badge from "./modules/badge";

export default function Main() {

    const [userState,setUserState] = React.useState({});

    const [isLoading,setIsLoading] = React.useState(true);


    React.useEffect(()=>{
        fakeApiRequest(setUserState,setIsLoading)
    },[])

  return (
    <View>
    <userContext.Provider value={[userState,setUserState]}>
        { isLoading ? <LoadView/> : <Badge/> }
    </userContext.Provider>
    </View>
  );
}


const LoadView = () =>(
    <View style={styles.wrapper}>
        <ActivityIndicator color="#fff" size="large"/>
    </View>
);


const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#00f',
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
    }
})


function fakeApiRequest(setData,setLoad){
    // Simulate a api request
    setTimeout(function(){
        setData(userData)
        setLoad(false)
    },2000)
}
