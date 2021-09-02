import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import userContext from '../../../context/userContext'

export default function ImageContainer() {

    const contexto = React.useContext(userContext)[0];

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri:contexto.avatar }}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        height: 250
    },
    image:{
        height: 200,
        width: 200,
        borderColor:'#00f',
        borderWidth:2,
        borderRadius:100
    }
})
