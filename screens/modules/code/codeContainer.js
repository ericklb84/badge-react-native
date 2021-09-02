import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function CodeContainer() {
  const contexto = React.useContext(userContext)[0];

    return (
        <View>
            <Text style={styles.title}>Código do funcionário</Text>
            <Text style={styles.idF}>{ contexto.id }</Text>
            <Text style={styles.vality}>Válido até: { contexto.vality }</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        marginTop:25
    },
    vality:{
        textAlign:'center',
        backgroundColor:'#00f',
        padding: 12,
        color: '#fff',
        fontWeight:'bold'
    },
    idF:{
        textAlign:'center',
        fontSize: 64,
        fontWeight:'bold',
        color: '#00f'
    }
})