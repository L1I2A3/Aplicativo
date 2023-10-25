import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableHighlight } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation, CommonActions } from '@react-navigation/core'
import ExemploAleg from '../../src/assets/emojis/ExemploAleg.png'
import emoji from '../../src/assets/emojis/emoji_teste.png'
import arrow from '../../src/assets/imagens/arrow.png'
import {COLORS} from '../../src/assets/colors'
import React from 'react'

const IndFacialScreen = (props) => {
  const navigation = useNavigation();
  const def = props.route.params.exp.texto;

  props.navigation.setOptions({
    //configura a barra superior
    headerStyle: { backgroundColor: '#88C987' },
    headerTitleStyle: { color: '#ffffff' },
    title: props.route.params.exp.texto,
  });

  const [exp, setExp] = useState("")
/*
  useEffect(() => {
    if(def != undefined){
      console.log(def)
      setExp(def)
    }
  }, [])
*/
  const toExercise = (def) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Exercise',
        //params: { exp: {def} }
      })      
    )
  }

  return (
    
    <SafeAreaView style={styles.container}>
      

      <View style={styles.divDois}>
        <Text style={styles.Titulo1}>Alegria</Text>
        <Image style={styles.imageLat} source = {emoji}></Image>
      </View>

      <View style={styles.divTres}>
        <Image style={styles.imagePrinc} source = {ExemploAleg}></Image>
      </View>

      <View style={styles.divQuatro}>
        <Text style={styles.Subtitulo}>Descrição</Text>
        <View style={styles.box1}>
          <ScrollView >
            <Text style={styles.corpo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices ultrices volutpat. Fusce eget lectus augue. Cras vitae iaculis massa. Nam non tempus metus. Donec tristique quis mauris sed pharetra. Aenean vitae diam diam. Sed ac leo volutpat, consequat sapien a, pretium enim. Etiam imperdiet eu </Text>
          </ScrollView>
        </View>

      </View>
      
      <View style={styles.divQuatro}>
        <Text style={styles.Subtitulo}>Contexto Comum de ocorrência</Text>

        <View style={styles.box2}>
          <ScrollView >
            <Text style={styles.corpo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices ultrices volutpat. Fusce eget lectus augue. Cras vitae iaculis massa. Nam non tempus metus. Donec tristique quis mauris sed pharetra. Aenean vitae diam diam. Sed ac leo volutpat, consequat sapien a, pretium enim. Etiam imperdiet eu </Text>
          </ScrollView>
        </View>
      </View>

      <TouchableHighlight style={styles.box3} onPress={() => {toExercise(props.route.params.exp.texto)}}>
        <>
          <Text style={styles.Titulo2}>Exercitar</Text>
          <Image style={styles.imageLat} source = {arrow}></Image>
        </>
      </TouchableHighlight>
      
    </SafeAreaView>
  
  )
}

export default IndFacialScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: StatusBar.currentHeight,
        //flexDirection: 'column',
       // justifyContent: 'center',
        //alignItems: 'center', 
      },
      //divUm: { flex: 2, alignItems: 'center', flexDirection: 'row'},
      divDois: { flex: 2, alignItems: 'center', justifyContent: 'center',flexDirection: 'row', marginTop: 10},
      divTres: { flex: 4, alignItems: 'center', marginVertical: 20,},
      divQuatro: { flex: 5, marginTop: 50},
      divCinco: { flex: 4, alignItems: 'center', flexDirection: 'row' },

      imagePrinc: {
        height: 200,
        width: 200,
      },
      imageLat: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
      },
      Titulo1: {
        fontSize: 40,
        fontWeight: 'bold',
      },
      Subtitulo: {
        fontSize: 20,
        justifyContent: 'flex-end',
        marginLeft: 20,
        marginTop: 20,
        fontWeight: 'bold',
      },
      corpo: {
        fontSize: 16,
        //justifyContent: 'flex-end',
        margin: 2,
        maxWidth: 320,
        textAlign: 'justify',
        
      },
      box1: {
          flexHorizontal: 2,
          width: 340,
          height: 150,
          //flexDirection: 'row',
          alignItems: 'center',
          //justifyContent: 'space-between',
          backgroundColor: COLORS.grey,
          borderRadius: 15,
          padding: 1,
          marginLeft: 20,
          marginTop: 3,
      },
      box2: {
        flexHorizontal: 2,
        width: 340,
        height: 75,
        //flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        backgroundColor: COLORS.grey,
        borderRadius: 15,
        padding: 1,
        marginLeft: 20,
        marginTop: 3,
      },
      box3: {
        width: 'auto',
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.primary,
        padding: 1,
        marginTop: 20,
      },

      Titulo2: {
      fontSize: 40,
      fontWeight: 'bold',
      color: COLORS.white,
      },
  
})