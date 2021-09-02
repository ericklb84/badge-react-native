import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from './card'
import userContext from '../../../context/userContext';


export default function CardList() {
  const contexto = React.useContext(userContext)[0];

  console.log(contexto.benefits)
    return (
        <View>
            <Text style={styles.title}>Beneficios</Text>
            <View style={styles.cardList}>
                { contexto.benefits.map((data,indice) =><Card indice={indice} cardinfo={data}/>) }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        color: '#000',
        marginTop:16,
        textAlign:'center',
        fontWeight:'bold'
    },
    cardList:{
        alignItems:'center'
    }
})

