import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'



const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  
  
  const handleLogin = () => {
    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with: ', user.email);
        })
        .catch(error => alert(error.message))
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            navigation.replace("Home")
        }
    })
    return unsubscribe
  }, [])

  const toRegister = () => {
    navigation.push("Register")
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
      <TouchableOpacity  // botão login
            onPress={()=>navigation.navigate('Home')} // "!!!!! mudei porque nao conseguia logar pra testar as outras telas kkk (  {handleLogin}  em vez de {()=>navigation.navigate('Home')}   ) " TODO: alterar essa parte
            style = {styles.button}
        >
            <Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={toRegister}
            style = {[styles.button, styles.buttonOutline]}
        >
            <Text style = {styles.buttonOutlineText}>Registre-se</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
},
inputContainer: {
    width: '80%'
},
input: {
    backgroundColor: 'white',
    paddingHorizontal: 75,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
},
buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
},
button: {
    backgroundColor: '#078288',
    width: '100%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center'
},
buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#078288',
    borderWidth: 2,
},
buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
},

buttonOutlineText: {
    color: '#078288',
    fontWeight: '700',
    fontSize: 16
},

})