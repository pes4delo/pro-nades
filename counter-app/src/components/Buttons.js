import { StyleSheet, Text, TouchableHighlight,  View, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const imagens = {
  Inferno: require('./images/inferno.jpg'),
  Mirage: require('./images/mirage.jpg'),
  Nuke: require('./images/nuke.jpg'),
  Overpass: require('./images/overpass.jpg'),
  Vertigo: require('./images/vertigo.jpg'),
  Ancient: require('./images/ancient.jpeg'),
  Anubis: require('./images/anubis.jpg'),
  Dust2: require('./images/dust2.jpg'),
  Train: require('./images/train.jpg'),
  Cache: require('./images/cache.jpg'),

  
  
};

export default props => {

  const [fundo, setFundo] = useState(imagens[props.label]);

  const navigation = useNavigation();

  function handleButtonPress() {
    if (props.label in imagens) {
      setFundo(imagens[props.label]);
    }

    navigation.navigate('Pick a Side', { map: props.label });
  }



  return (
    
      
      <TouchableHighlight style={style.buttons} onPress={handleButtonPress}>
          
          
            <View>

            {fundo && <ImageBackground source={fundo} style={style.imagem} resizeMode="cover" />}
            <View style={style.miniContainer}>
            <Text style={style.texto}>{props.label}</Text>
            </View>
            </View>
          

      
      </TouchableHighlight>

    
   );
 }

const style = StyleSheet.create({
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
   
    imagem:{
      flex: 1,
      borderRadius: 10,
      width: '100%',
      height: 100,
 
      
    },
    texto:{
      
      fontSize: 20,
      marginTop:0,
      color:'white',
      textAlign:'center',
    },
    miniContainer: {
      
      backgroundColor:'#1c1c1c',
      top:60,
      height:35,
      width:150,
      borderTopRightRadius:0,
      borderBottomRightRadius:0,
      borderRadius:15,
      opacity:0.8,
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection:'row',
      alignSelf:'flex-end',
      
    },




})