import React from "react";
import { StyleSheet, Text,TouchableHighlight, Image, SafeAreaView, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';


const mapa = require('./images/mapainferno.png');

export default () => {




  const navigation = useNavigation();
  function showVideoSmkCt() {
    navigation.navigate('VideoSmkCt');
  }

  function showVideoSmkCoffin() {
    navigation.navigate('VideoSmkCoffin');
  }

  function showVideoSmkBanana() {
    navigation.navigate('VideoSmkBanana');
  }

  function showVideoSmkMid() {
    navigation.navigate('VideoSmkMid');
  }

  function showVideoSmkNip() {
    navigation.navigate('VideoSmkNip');
  }
    return(
            
            <SafeAreaView style={style.container} >
              <Image style={style.map} source={mapa}  resizeMode="cover" />
              <TouchableHighlight style={style.buttonSmkCt} onPress={showVideoSmkCt}>
                <ImageBackground style={style.smk} source={require('./images/fumaca.png')} resizeMode="cover" />
              </TouchableHighlight>
              <TouchableHighlight style={style.buttonSmkCoffin} onPress={showVideoSmkCoffin}>
                <ImageBackground style={style.smk} source={require('./images/fumaca.png')} resizeMode="cover" />
              </TouchableHighlight>
              <TouchableHighlight style={style.buttonSmkBanana} onPress={showVideoSmkBanana}>
                <ImageBackground style={style.smk} source={require('./images/fumaca.png')} resizeMode="cover" />
              </TouchableHighlight>
              <TouchableHighlight style={style.buttonSmkMid} onPress={showVideoSmkMid}>
                <ImageBackground style={style.smk} source={require('./images/fumaca.png')} resizeMode="cover" />
              </TouchableHighlight>
              <TouchableHighlight style={style.buttonSmkNip} onPress={showVideoSmkNip}>
                <ImageBackground style={style.smk} source={require('./images/fumaca.png')} resizeMode="cover" />
              </TouchableHighlight>
            </SafeAreaView>
    )
}




const style = StyleSheet.create({
    map : {
    position:'absolute',  
    height: 400,
    width: 400,
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
  },

  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    alignItems:'center',
  
  },
  buttonSmkCt: {
    position: 'relative',
    top: 90,                  
    left: 10,                  
    borderRadius: 5,    
    height: 20,
    width: 20,

    
  },
  buttonSmkCoffin: {
    position: 'relative',
    top: 45,                  
    left: -25,                  
    borderRadius: 5,    
    height: 20,
    width: 20,

    
  },
  buttonSmkBanana: {
    position: 'relative',
    top: 115,                  
    left: -35,                  
    borderRadius: 5,    
    height: 20,
    width: 20,

    
  },
  buttonSmkMid: {
    position: 'relative',
    top: 180,                  
    left: 20,                  
    borderRadius: 5,    
    height: 20,
    width: 20,

    
  },
  buttonSmkNip: {
    position: 'relative',
    top: 130,                  
    left: 40,                  
    borderRadius: 5,    
    height: 20,
    width: 20,

    
  },
  video: {
    width: 300, 
    height: 200, 
  },

  smk:{
    flex:1,
    width: '100%',
    height: '100%',
    alignSelf:'center',

    
  },


})