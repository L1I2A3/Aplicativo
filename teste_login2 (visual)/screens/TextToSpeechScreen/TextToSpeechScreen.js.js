import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Speech from 'expo-speech';
import { speak } from 'expo-speech';
import { SelectList } from 'react-native-dropdown-select-list'
import Button from '../../src/components/Button';
import { getAuth } from 'firebase/auth'
import { app } from '../../firebase'
import { getFirestore, doc, updateDoc, arrayUnion, } from 'firebase/firestore'
import { CommonActions } from '@react-navigation/native';


const TextToSpeechScreen = (props) => {
  props.navigation.setOptions({
    //configura a barra superior
    headerStyle: { backgroundColor: '#88C987' },
    headerTitleStyle: { color: '#fff' },
    title: 'Texto para Voz',
  });

  const [selected, setSelected] = useState("pt-BR")
  const [message, setMessage] = useState("")
  const data = [

    { key: 'pt-BR', value: 'Português Brasil' },
    { key: 'pt-PT', value: 'Português Portugal' },
    { key: 'en-US', value: 'Inglês EUA' },
    { key: 'es-MX', value: 'Espanhol Mexico' },
    { key: 'es-ES', value: 'Espanhol Esapanha' },
    { key: 'fr-FR', value: 'Francês' },
    { key: 'it-IT', value: 'Italiano' },
    { key: 'ja-JP', value: 'Japonês' },
    { key: 'nl-NL', value: 'Alemão' },

  ]
  //Aqui estou pegando o item deixado como parametro numa rota anterior (vinda de navigate)
  useEffect(() => {
    if(props.route.params != undefined){
      setMessage(props.route.params.user.message)
    }
  }, [])
  const auth = getAuth(app);
  const db = getFirestore(app);


  const teste = () => {
    updateDoc(doc(db, "users", auth.currentUser.uid, "fav", auth.currentUser.uid), { message: arrayUnion(message) })
    console.log('algo ocorreu')
  }

  const speak = () => {
    Speech.speak(message,
      {
        language: selected,
        rate: 0.5,
      });
  }

  return (


    <View style={styles.container}>
      <SelectList
        style={styles.selectionList}
        setSelected={(val) => setSelected(val)}
        data={data}
        save="key"
        placeHolder="Idioma da voz"
        defaultOption={{ key: 'pt-BR', value: 'Português Brasil' }}
      />


      <TextInput style={styles.input}
        placeholder="Insira o texto a ser falado"
        value={message}
        onChangeText={text => setMessage(text)}
        multiline
      />

      <View style={styles.buttonContainer}>

        <TouchableOpacity

          onPress={speak}
          style={styles.button}
        >
          <Image
            source={require('../../src/assets/imagens/icon_TextVoice.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Button
        texto='Adicionar texto aos Favoritos' onClick={teste}
      />



    </View>
  );

}

export default TextToSpeechScreen;


const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',

  },
  input: {

    width: '85%',
    height: 274,
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',

  },

  buttonContainer: {
    width: '85%',
    height: 274,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  button: {
    backgroundColor: '#88C987',
    width: '80%',
    height: '100%',
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',

  },
  selectionList: {
    marginTop: 10,
  },
  icon: {
    Width: "100%",
    Height: "100%",
    resizeMode: 'cover',
  },
  favorito: {
    backgroundColor: '#EAD076',
    width: '80%',
    height: '100%',
    borderRadius: 360,
    alignItems: 'flex-start'
  }
}) 