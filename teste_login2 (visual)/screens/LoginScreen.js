import { Alert, StyleSheet, Text, TextInput, View, Image, ScrollView, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { CommonActions } from '@react-navigation/native'
import Button from '../src/components/Button'
import {COLORS} from '../src/assets/colors'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = () => {
    const auth = getAuth();
    if (email !== '' && password !== ''){
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            if (!currentUser.emailVerified){
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
    <SafeAreaView style={styles.container}>
        <ScrollView>

        <View style={styles.divSuperior}>
            <Image 
                style={styles.image} 
                source={require('../src/assets/imagens/templateLogo.png')}
                accessibilityLabel='logo do app'
            />
            <TextInput 
                style={styles.input}
                placeholder="Email"
                value = {email}
                onChangeText = {text => setEmail(text)}
                keyboardType="email-address"
                returnKeyType="next"
                onEndEditing={() => this.passTextInput.focus()}
            />

            <TextInput 
                ref = {(ref) => {
                    this.passTextInput = ref;
                }}
                style={styles.input}
                placeholder="Senha"
                keyboardType= "default"
                returnKeyType="go"
                value = {password}
                onChangeText = {text => setPassword(text)}
                secureTextEntry/>

            <Text style={styles.textEsqueceuSenha} onPress={ForgotPassword}>Esqueceu sua senha?</Text>

            <Button texto= 'ENTRAR' onClick={handleLogin}/>
        </View>



        <View style={styles.divInferior}>
            <View style={styles.diOuHr}>
                <View style={styles.divHr}></View>
                <Text style={styles.textOu}>OU</Text>
                <View style={styles.divHr}></View>
            </View>
            <View style={styles.divCadastrarse}>
                <Text style={styles.textNormal}>Não tem uma conta?</Text>
                <Text style={styles.textCadastrase} onPress={toRegister}> Cadastre-se</Text>
            </View>
            
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

//TODO: AJEITAR A ESTÉTICA

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
},
divSuperior: {
    flex: 2,
    alignItems: 'center',
    
},
divInferior: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,

},
image: {
    width: 190,
    height: 185,
    margin: 10,
},
input: {
    width: '95%',
    height: 50,
    margin: 10,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 2,
    font: '16',
    paddingLeft: 2,
    paddingBottom: 1,

},
textEsqueceuSenha: {
    font: '15',
    color: COLORS.accenSecundary,
    alignSelf: 'flex-end',
    marginTop: 20,

},
diOuHr: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
divHr: {
    width: '30%',
    height: 1,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 2,

},
textOu: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    color: COLORS.grey,

},
divCadastrarse: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},
textNormal: {
    fontSize: 18,

},
textCadastrase: {
    fontSize: 18,
    color: COLORS.accentSecundary,
    marginLeft: 3,
},
})
