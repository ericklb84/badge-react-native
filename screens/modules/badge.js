import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CardList from './benefits/cardList';
import CodeContainer from './code/codeContainer';
import Navbar from './header/navbar';
import ImageContainer from './image/imageContainer';
import NameContainer from './name/nameContainer';

export default function Badge() {

    
    return (
        <ScrollView style={styles.container} >
            <Navbar/>
            <ImageContainer/>
            <NameContainer/>
            <CodeContainer/>
            <CardList/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f2f4f6',
        height: '100%',
        flexDirection: 'column',
        alignContent:'center'
    }
})