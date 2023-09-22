import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'


import ButtonLado from '../components/ButtonLado';


export function TelaSelecaoDeLado({ route }) {
    const { map } = route.params
  
    // Adicione sua lógica de seleção de lado aqui com base no label selecionado
    // Por exemplo, você pode navegar para telas ou componentes diferentes para cada lado.
  
    return (
      <SafeAreaView style={styles.container3}>
        <ButtonLado side='Tr' map={map}></ButtonLado>
        <ButtonLado side='Ct' map={map}></ButtonLado>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  
    container3:{
      flex: 1,
      flexDirection:'row',
      backgroundColor:'black',
      alignItems:'center',
    }
  });