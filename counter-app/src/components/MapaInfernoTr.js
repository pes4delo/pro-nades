import React from "react";
import { StyleSheet, Dimensions,TouchableHighlight, Image, SafeAreaView, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';


const mapa = require('./images/mapainferno.png');

export default () => {




  const navigation = useNavigation();
  function handleButtonPress() {
    navigation.navigate('Video');
  }
    return(
            
            <SafeAreaView style={style.container} >
              <Image style={style.map} source={mapa}  resizeMode="cover" />
              <TouchableHighlight style={style.button} onPress={handleButtonPress}>
              <ImageBackground style={style.imagem} source={require('./images/fumaca.png')} resizeMode="cover" />
              </TouchableHighlight>

            </SafeAreaView>
    )
}




const style = StyleSheet.create({
    map : {

    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
    backgroundColor: '#1c1c1c',
    borderWidth: 1,

    

  },

  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    
  
  },
  button: {
    position: 'absolute',
    top: 45,             
    left: 240,                  
    borderRadius: 5,      
    height: 35,
    width: 35,

    
  },
  video: {
    width: 300, 
    height: 200, 
  },

  imagem:{
    flex:1,
    width: '100%',
    height: '100%',
    alignSelf:'center',

    
  },


})