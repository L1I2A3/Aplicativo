import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonFunctionF from '../../src/components/ButtonFunctionF';
import { useNavigation, CommonActions } from '@react-navigation/core'

import emoji from '../../src/assets/emojis/emoji_teste.png'

const FacialScreen = () => {
  const navigation = useNavigation();
  const toindFacial = (texto) => {
    //console.log(texto)
      navigation.dispatch(
        CommonActions.navigate({
          name: 'indFacial',
          params: { exp: {texto} }
        })      
      )
  }

  return (
    <View style={styles.container}>

    <View style={styles.divDois}>
      <ButtonFunctionF 
      texto="Alegria" 
      root={emoji} 
      onClick={() => toindFacial("Alegria")}/>
    </View>

    <View style={styles.divDois}>
      <ButtonFunctionF
        texto="Tristeza"
        root={emoji} 
        onClick={() => toindFacial("Tristeza")}
         />
    </View>

    <View style={styles.divDois}>
      <ButtonFunctionF 
      texto="Raiva" 
      root={emoji} 
      onClick={() => toindFacial("Raiva" )} />
    </View>

    <View style={styles.divDois}>
      <ButtonFunctionF 
      texto="medo" 
      root={emoji} 
      onClick={() => toindFacial("medo")} />
    </View>

    <View style={styles.divDois}>
      <ButtonFunctionF 
      texto="normal" 
      root={emoji} 
      onClick={() => toindFacial("normal" )} />
    </View>

    <View style={styles.divDois}>
      <ButtonFunctionF 
      texto="desprezo" 
      root={emoji} 
      onClick={() => toindFacial("desprezo" )} />
    </View>

    <View style={styles.divDois}>
      <ButtonFunctionF 
      texto="surpresa" 
      root={emoji} 
      onClick={() => toindFacial("surpresa" )} />
    </View>
  </View>

    
  )
}

export default FacialScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      divUm: { flex: 2, alignItems: 'center', },
      divDois: { flex: 2, alignItems: 'center', },
      image: {
        width: 105,
        height: 70,
        margin: 20,
      },
      image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
})