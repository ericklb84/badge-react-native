import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

export default function Card({ cardinfo,indice }) {
    return (
        <View id={indice} style={styles.container}>
            <View>
                <Image style={styles.image} source={ {uri:cardinfo.banner} }/>
            </View>
            <View style={styles.infoWrapper}>
                <Text>{cardinfo.name}</Text>
                <Text>{cardinfo.benefitType == 1 ? <BenefitPercent percent={cardinfo.benefit}/> : <BenefitValue value={cardinfo.benefit}/> }</Text>
            </View>
        </View>
    )
}

const BenefitPercent = ({percent}) =>(
    <Text>{percent}% de desconto</Text>
);

const BenefitValue = ({value}) =>(
    <Text>R$ {value} OFF</Text>
);

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#a6a6a6',
        borderRadius:6,
        width: '95%',
        marginTop: 15
    },
    image:{
        height: 120
    },
    infoWrapper:{
        flexDirection:'row',
        padding: 15,
        justifyContent:'space-between'
    }
})