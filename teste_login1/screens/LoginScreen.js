import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { auth } from '../firebase'
import { CommonActions } from '@react-navigation/native'



const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = () => {
    if (email !== '' && password !== ''){
        auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            if (!auth.currentUser.emailVerified){
                Alert.alert('Erro','O email deverá ser vericado')
                return;
            }
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'Home' }],
                  })
            )
        })
        .catch((e) => {
            console.log('handleSignup' + e)
            switch (e.code) {
                case 'auth/user-not-found':
                        Alert.alert('Erro','Usuário não cadastrado')
                        break;
                case 'auth/invalid-email':
                        Alert.alert('Erro','Email inválido')
                        break;
                case 'auth/wrong-password':
                        Alert.alert('Erro','Senha incorreta')
                        break;
                case 'auth/user-disabled':
                        Alert.alert('Erro','Usuário desabilitado')
                        break;
                }
            
                }
        )
    } else {
        Alert.alert('Erro','Campos obrigátorios não preenchidos');
    };
    
        
  }

  const ForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  }
  const toRegister = () => {
    navigation.navigate("Register")
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
            onPress={()=>navigation.navigate('Home')} // "!!!!! mudei porque nao conseguia logar pra testar as outras telas kkk (  {handleLogin}  em vez de {()=>navigation.navigate('Home')}   ) "
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

        <TouchableOpacity 
            onPress={ForgotPassword}
             style = {[styles.button, styles.buttonOutline]}>
            
            <Text style = {styles.buttonOutlineText}>
                 Esqueceu sua senha?
            </Text>
            
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

//TODO: AJEITAR A ESTÉTICA

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