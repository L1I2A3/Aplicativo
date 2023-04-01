import { Text, View,  TextInput, StyleSheet, KeyboardAvoidingView, Button, Alert, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/core'

const TextToVoiceScreen = ()=>{

    const [message,setMessage]=useState("")

    const navigation = useNavigation();

return (


  
<View style={styles.container}>

<View style={styles.buttonContainer}>
<TouchableOpacity  
            onPress={([message])=>Alert.alert("mensagem", [message])} 
            style = {styles.button}
        >
        </TouchableOpacity>
</View>
 
 
<KeyboardAvoidingView/>
<TextInput style = {styles.input} 
placeholder="Insira o texto a ser falado"
value={message}
onChangeText={text=>setMessage(text)}

/>
<KeyboardAvoidingView/>

</View>


)

  }

  export default TextToVoiceScreen

  const styles = StyleSheet.create({
    container: {
      flex: 2,
      flexDirection:'column',
     justifyContent: 'space-around',
      alignItems:'center',
  
    },
    input: {

      width: '85%',
      height: 274,
      textAlign: 'center',

      borderRadius: 10,
      backgroundColor: '#D9D9D9',

    },

    buttonContainer:{
      width: '85%',
      height: 274,
      justifyContent: 'center',
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




