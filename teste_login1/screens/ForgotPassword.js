import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {auth} from '../firebase'


const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState('');

    const recover = () => {
        if (email !== ''){
            console.log(email);
            auth
                .sendPasswordResetEmail(email)
                .then((r) => {
                Alert.alert('Atenção', 'Foi enviado um email de recuperação de senha para o seguinte endereço: '+ email, 
                [{text: 'OK', onPress: () => navigation.goBack()}]);
                })
                .catch((e) => {
                    console.log('ForgotPassword, recover'+ e)
                    switch (e.code) {
                        case 'auth/user-not-found':
                                Alert.alert('Erro','Usuário não cadastrado')
                                break;
                        case 'auth/invalid-email':
                                Alert.alert('Erro','Email inválido')
                                break;
                        case 'auth/user-disabled':
                                Alert.alert('Erro','Usuário desabilitado')
                                break;
                    }
                    
                });
        } else {
            Alert.alert('Erro','Insira um email')
        }
    }


    return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
        <Text >forgotPassword</Text>
              <View styles={styles.inputContainer}>
                  <TextInput
                      placeholder="Email"
                      value={email}
                      keyboardType="email-address"
                      onChangeText={text => setEmail(text)}
                      style={styles.input}
                      autoFocus={true}
                    />

                    <TouchableOpacity 
                         onPress={recover}
                         style = {[styles.button, styles.buttonOutline]}>
                        <Text>Recuperar senha</Text>
                    </TouchableOpacity>

                </View>
        
        </KeyboardAvoidingView>
        
  )
}

export default ForgotPassword

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