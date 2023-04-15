import { Text, View,  TextInput, StyleSheet, KeyboardAvoidingView, Button, Alert, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/core'
import * as Speech from 'expo-speech';

const TextToSpeechScreen = ({ navigation }) => {


    const [message, setMessage]=useState("")
    
   
    const speak = () => {
        Speech.speak(message,
            {
            language: 'pt-BR',
            rate: 0.5,
            });
    }
    return (

        <View style={styles.container}>

        <TextInput style = {styles.input} 
        placeholder="Insira o texto a ser falado"
        value={message}
        onChangeText={text=>setMessage(text)}  
        />

        <View style={styles.buttonContainer}>
        <TouchableOpacity  

                    onPress={speak} 
                    style = {styles.button}
                >
                </TouchableOpacity>
        </View>
         
        </View>
    );

}

export default TextToSpeechScreen;


const styles = StyleSheet.create({
    container: {
      flex: 2,
      flexDirection:'column',
      alignItems:'center',
  
    },
    input: {

      width: '85%',
      height: 274,
      textAlign: 'center',
      marginTop: 20,
      borderRadius: 10,
      backgroundColor: '#D9D9D9',

    },

    buttonContainer:{
      width: '85%',
      height: 274,
      justifyContent: 'center',
      marginBottom: 20,
      alignItems: 'center',
      marginTop: 12,
    },

    button: {
      backgroundColor: '#078288',
      width: '100%',
      height: '100%',
      borderRadius: 360,
      alignItems: 'center',

    },
  }) 