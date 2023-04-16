import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView, Button, Alert, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Speech from 'expo-speech';
import { speak } from 'expo-speech';
import { SelectList } from 'react-native-dropdown-select-list'
import AsyncStorage from '@react-native-async-storage/async-storage';



const TextToSpeechScreen = ({ navigation }) => {

  navigation.setOptions({
    //configura a barra superior
    headerStyle: { backgroundColor: '#88C987' },
    headerTitleStyle: { color: '#fff' },
    // headerRight: () => <LogoutButton />
  });

  const [selected, setSelected] = useState("pt-BR")
  const [message, setMessage] = useState("")
  const data = [

    { key: 'pt-BR', value: 'Português Brasil' },
    { key: 'pt-PT', value: 'Português Portugal' },
    { key: 'en-US', value: 'US English' },
    { key: 'es-MX', value: 'Spanish Mexico' },
    { key: 'fr-FR', value: 'French' },
    { key: 'it-IT', value: 'Standard Italian' },
    { key: 'ja-JP', value: 'Japanese' },
    { key: 'nl-NL', value: 'Standard Dutch' },
  ]

  const storeTextVoiceCache = async (value) => {
    try {
        value = String(message);
        console.log(value)
        await AsyncStorage.setItem('TextVoice', value)
        console.log('armazenou')
    } catch (e) {
       // console.log('TextToSpeechScreen, storeMessageCache' + e)

    }
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
        title='Favoritos' onPress={storeTextVoiceCache}
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