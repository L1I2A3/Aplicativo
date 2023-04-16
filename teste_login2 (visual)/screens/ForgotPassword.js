import { Alert, SafeAreaView, StyleSheet, TextInput, Image, View } from 'react-native'
import React, { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { app } from '../firebase'
import { CommonActions } from '@react-navigation/native'
import Button from '../src/components/Button'
import { COLORS } from '../src/assets/colors'




const ForgotPassword = ({ navigation }) => {

  const [email, setEmail] = useState('');

  const recover = () => {
    const auth = getAuth(app);
    if (email !== '') {
      sendPasswordResetEmail(auth, email) //TODO: REMODELAR O EMAIL DE RESET
        .then((r) => {
          Alert.alert('Atenção', 'Foi enviado um email de recuperação de senha para o seguinte endereço: ' + email,
            [{
              text: 'OK',
              onPress: navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'Login' }],
                })
              )
            }]);
        })
        .catch((e) => {
          console.log('ForgotPassword, recover' + e)
          switch (e.code) {
            case 'auth/user-not-found':
              Alert.alert('Erro', 'Usuário não cadastrado')
              break;
            case 'auth/invalid-email':
              Alert.alert('Erro', 'Email inválido')
              break;
            case 'auth/user-disabled':
              Alert.alert('Erro', 'Usuário desabilitado')
              break;
          }

        });
    } else {
      Alert.alert('Erro', 'Insira um email')
    }
  }


  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.divSuperior}>
        
          <Image
            style={styles.image}
            source={require('../src/assets/imagens/templateLogo.png')}
            accessibilityLabel='logo do app'
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"

          />

          

          <Button texto='Recuperar senha' onClick={recover} />
       

       
      </View>

    </SafeAreaView>
  )
}

export default ForgotPassword

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
  image: {
    width: 190,
    height: 185,
    marginBottom: 50,
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


})