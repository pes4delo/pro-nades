import { StyleSheet, Text, TouchableHighlight,  View, ImageBackground, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const imagens = {
  Tr: require('./images/tr.png'),
  Ct: require('./images/ct.png'),


  
  
};

export default props => {

  const [fundo, setFundo] = useState(imagens[props.side]);

  const navigation = useNavigation();

  function handleButtonPress() {
    if (props.label in imagens) {
      setFundo(imagens[props.side]);
    }
    
    navigation.navigate('Map', { side: props.side, map:props.map });
  }



  return (
    
      
      <TouchableHighlight style={style.buttons} onPress={handleButtonPress}>
          
          
            <View style={style.container}>

            {fundo && <ImageBackground source={fundo} style={style.imagem} resizeMode="cover" />}
            
            </View>
          

      
      </TouchableHighlight>

    
   );
 }

const style = StyleSheet.create({
      buttons : {
      
      borderRadius:10,
      fontSize:40,
      height:'98%',
      width: Dimensions.get('window').width/2,
      backgroundColor: '#1c1c1c',
      textAlign:'center',
      borderWidth: 1,
      borderColor:'black',
      justifyContent: 'center', 
      alignItems: 'center',
      overflow: 'hidden',

    },
   
    imagem:{
      flex: 1,
      borderRadius: 10,
      width: '100%',
      height: Dimensions.get('window').width/2,
      position:'absolute',
      

      
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      
    },




})