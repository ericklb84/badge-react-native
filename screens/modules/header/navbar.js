import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default function Navbar() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Crachá Virtual</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        flexDirection:'row',
        height: 100,
        backgroundColor:'#00f',
        paddingBottom: 12,
        borderBottomColor:"#ff0",
        borderBottomWidth:5
    },
    text:{
        color: '#fff',
        fontWeight:'bold',
        fontSize:22
    }
})
