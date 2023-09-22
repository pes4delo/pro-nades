import {StyleSheet, View, Text, ScrollView, TouchableHighlight} from "react-native";
import React, { useState } from "react";
import { Video } from 'expo-av';


export function MostrarVideo(){
  

const [videoSource, setVideoSource] = useState(require('../components/images/smkctbanana.mp4'))

    
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
        
        <Text style={style.texto}>Outras smokes para base CT</Text>
        <ScrollView style={style.containerScroll}>
        <TouchableHighlight style={style.buttons} onPress={() => changeVideo(require('../components/images/smkctbanana.mp4'))} >
          <Text style={style.texto}>Smoke CT lançada da banana</Text>
        </TouchableHighlight>      
        <TouchableHighlight style={style.buttons} onPress={() => changeVideo(require('../components/images/smkct.mp4'))} >
        <Text style={style.texto}>Smoke CT lançada da base TR</Text>
        </TouchableHighlight>     
        <TouchableHighlight style={style.buttons} onPress={() => changeVideo(require('../components/images/smkctcarro.mp4'))} >
        <Text style={style.texto}>Smoke CT lançada do carro</Text>
        </TouchableHighlight>    
        <TouchableHighlight style={style.buttons} onPress={() => changeVideo(require('../components/images/smkctarvore.mp4'))} >
        <Text style={style.texto}>Smoke CT lançada da arvore</Text>
        </TouchableHighlight>      
        <TouchableHighlight style={style.buttons} onPress={() => changeVideo(require('../components/images/smkctapartamento.mp4'))} >
        <Text style={style.texto}>Smoke CT lançada do apartamento</Text>
        </TouchableHighlight>   
        <TouchableHighlight style={style.buttons} onPress={() => changeVideo(require('../components/images/smkctmeio.mp4'))} >
        <Text style={style.texto}>Smoke CT lançada do meio</Text>
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
      width: '100%',
      height: 300,
    },
    container: {
      flex: 1,
      backgroundColor: 'black',
      
    },
    texto: {
      alignSelf:'center',
      marginTop:30,
      marginBottom:10,
      color:'white',
      fontSize:15,
      
      

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

    },
    containerScroll: {
      flex: 1,
      top:10,
    }



})