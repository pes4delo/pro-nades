import {StyleSheet, View, Text, ScrollView, TouchableHighlight} from "react-native";
import React, { useState } from "react";
import { Video } from 'expo-av';


export function MostrarVideoSmkCoffin(){
  

  //const [videoSource, setVideoSource] = useState(require('../components/images/smkctbanana.mp4'))
  const [videoSource, setVideoSource] = useState({uri:'https://i.imgur.com/NFQ3rR3.mp4'})

    
const changeVideo = (newVideoSource) => {
    setVideoSource(newVideoSource)


}



    return(
      <View style={style.container}>
        <View style={style.videoContainer}>
          <Video

          source={videoSource}
          rate={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={style.video}
          useNativeControls
          onLoadStart={() => console.log('on load start')}
          onLoad={() => console.log('on load')}

          />
          
        </View>
        
        <Text style={style.textoDesc}>Outras smokes para o caixão</Text>
        <ScrollView style={style.containerScroll}>
        <TouchableHighlight style={style.buttons} onPress={() => changeVideo({uri:'https://i.imgur.com/dI7nbqY.mp4'})} >
          <Text style={style.texto}>Smoke Caixão lançada da banana</Text>
        </TouchableHighlight>
        <TouchableHighlight style={style.buttons} onPress={() => changeVideo({uri:'https://i.imgur.com/RuTWrSq.mp4'})} >
          <Text style={style.texto}>Smoke Caixão lançada do carro</Text>
        </TouchableHighlight>
        <TouchableHighlight style={style.buttons} onPress={() => changeVideo({uri:'https://i.imgur.com/PcbWFhN.mp4'})} >
          <Text style={style.texto}>Smoke Caixão lançada do meio</Text>
        </TouchableHighlight>
        <TouchableHighlight style={style.buttons} onPress={() => changeVideo({uri:'https://i.imgur.com/3xENCbL.mp4'})} >
          <Text style={style.texto}>Smoke Caixão lançada do apartamento TR</Text>
        </TouchableHighlight>
          
        </ScrollView>
      </View>
    )
  
  
  }

  const style = StyleSheet.create({
    videoContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor:'black',
      
    },
    video: {
      flex: 1,
      width: '100%',
      height: 300,
    },
    container: {
      flex: 1,
      backgroundColor: 'black',
      
    },
    texto: {
      alignSelf:'center',
      color:'white',
      fontSize:15,
      
      

    },
    textoDesc: {
      alignSelf:'center',
      color:'white',
      fontSize:15,
      marginTop:20,
      marginBottom:10,
      justifyContent:'center',
      
    },
    buttons : {

      borderRadius:10,
      fontSize:40,
      height:100,
      width: '100%',
      backgroundColor: '#1c1c1c',
      textAlign:'center',
      borderWidth: 1,
      borderColor:'black',
      overflow: 'hidden',
      justifyContent:'center',

    },
    containerScroll: {
      flex: 1,
      top:10,
    }



})