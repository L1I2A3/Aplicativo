import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { auth } from '../firebase'
import { CommonActions } from '@react-navigation/native'



const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [name, setName] = useState('')

  const handleSignup = () => {
    if(email !== '' && password !== ''&& confPassword !== '' && name !== '') {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          let userF = auth.currentUser;
          userF.sendEmailVerification() //: REMODELAR O EMAIL DE REGISTRO
          .then(() => {
            Alert.alert('Verificação', 'Email de Verificação enviado com sucesso, verifique o endereço: ' + email);
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  { name: 'Login' }],
                })
           );
          })
          .catch((e) => {
            console.log('handleSignup'+ e)   
          })
         
        })
        .catch((e) => {
          console.log('handleSignup'+ e)
          switch (e.code) {
              case 'auth/email-already-in-use':
                Alert.alert('Erro','Email digitado já está em uso')
                break;
              case 'auth/invalid-email':
                Alert.alert('Erro','Email inválido')
                break;
              case 'auth/user-disabled':
                Alert.alert('Erro','Usuário desabilitado')
                break;
              case 'auth/operation-not-allowed':
                Alert.alert('Erro','Problemas técnicos ao cadastrar')
                break;
              }
          
            }
        )
    } else {
      Alert.alert('Alerta', 'Por favor, preencha os campos acima')
    }
    
    }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
      <View styles={styles.inputContainer}>
        <TextInput
            placeholder="Nome completo"
            value = {name}
            onChangeText = {text => setName(text)}
            style = {styles.input}
        />
         <TextInput
            placeholder="Email"
            value = {email}
            onChangeText = {text => setEmail(text)}
            style = {styles.input}

        />
        <TextInput
            placeholder="Senha"
            value = {password}
            onChangeText = {text => setPassword(text)}
            style = {styles.input}
            secureTextEntry
        />
         <TextInput
            placeholder="Confirmar senha"
            value = {confPassword}
            onChangeText = {text => setConfPassword(text)}
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

// AJEITAR A ESTÉTICA

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