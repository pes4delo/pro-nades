import {View, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'


import Buttons from "../components/Buttons"



export function TelaInicial() {
  


    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Image source={require('../components/images/pngegg.png')} resizeMode="contain" style={styles.logoCs}/>
          </View>
           <ScrollView>
            <View style={styles.container2}>
              
              <Buttons label='Inferno'/>
              <Buttons label='Mirage' />
              <Buttons label='Nuke' />
              <Buttons label='Overpass' />
              <Buttons label='Vertigo' />
              <Buttons label='Ancient' />
              <Buttons label='Anubis' />
              <Buttons label='Dust2' />
              <Buttons label='Train' />
              <Buttons label='Cache' />
              
            </View>
          </ScrollView> 
        </SafeAreaView>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      
    },

    container2:{
      flex:1,
      gap:10,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor:'black',
      alignItems:'center',
    },
    logoCs:{
      height:50,
      width:50,
      marginLeft:260,
      marginBottom:-70,
      
    },
    header: {
      justifyContent:'flex-start',
      backgroundColor: 'black', 
      position:'relative',
      right: 130,
      bottom:25,
      paddingTop: 30,
      paddingBottom:30,
      zIndex:1,
      
    },

  });

