import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'



const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  const handleSignup = () => {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered in with: ',user.email);
        })
        .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
      <View styles={styles.inputContainer}>
        <TextInput
            placeholder="Email"
            value = {email}
            onChangeText = {text => setEmail(text)}
            style = {styles.input}
        />
         <TextInput
            placeholder="Password"
            value = {password}
            onChangeText = {text => setPassword(text)}
            style = {styles.input}
            secureTextEntry
        />
       
      </View>

      <View style = {styles.buttonContainer}>
        
        <TouchableOpacity
           onPress={handleSignup}
            style = {[styles.button, styles.buttonOutline]}
        >
            <Text style = {styles.buttonOutlineText}>Registre-se</Text>
        </TouchableOpacity>

        

      </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
container: {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center',
},
inputContainer: {
  width: '80%',
},
input: {
  backgroundColor: 'white',
  paddingHorizontal: 40,
  paddingVertical: 10,
  borderRadius: 10,
  marginTop: 10,
  textAlign: 'center'
  
  
},
buttonContainer: {
  width: '60%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 40,
},
button: {
  backgroundColor: '#0782F9',
  width: '100%',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center'
},
buttonBack: {
  backgroundColor: '#0782F9',
  width: '100%',
  padding: 25,
  borderRadius: 10,
  alignItems: 'center'
},
buttonOutline: {
  backgroundColor: 'white',
  marginTop: 5,
  borderColor: '#0782F9',
  borderWidth: 2,
},
buttonText: {
  color: 'white',
  fontWeight: '700',
  fontSize: 16
},

buttonOutlineText: {
  color: '#0782F9',
  fontWeight: '700',
  fontSize: 16
},

})