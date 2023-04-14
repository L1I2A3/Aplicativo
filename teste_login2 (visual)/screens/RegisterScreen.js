import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { app } from '../firebase'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, StyleSheet, TextInput, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../src/assets/colors'
import Button from '../src/components/Button'


const RegisterScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [name, setName] = useState('')


  const handleSignup = () => {

    const auth = getAuth(app);
    const db = getFirestore(app);

    if (email !== '' && password !== '' && confPassword !== '' && name !== '') {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          let userF = auth.currentUser;
          let user = {}
          user.nome = name;
          user.email = email;
          setDoc(doc(db, "users", userF.uid), user)
            .then(() => {
              console.log("Sign up, setDoc: usuário adicionado")
              sendEmailVerification(auth.currentUser) //TODO: REMODELAR O EMAIL DE REGISTRO
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
                  console.log('handleSignup, envio do email de verificação' + e)
                })

            }).catch((e) => {
              console.log('handleSignup, adição ao firestore' + e)
            })
          //"Users" -> referencia da coleção; "userF.uid" -> chave do documento; "user" -> valores do documento



        })
        .catch((e) => {
          console.log('handleSignup' + e)
          switch (e.code) {
            case 'auth/email-already-in-use':
              Alert.alert('Erro', 'Email digitado já está em uso')
              break;
            case 'auth/invalid-email':
              Alert.alert('Erro', 'Email inválido')
              break;
            case 'auth/user-disabled':
              Alert.alert('Erro', 'Usuário desabilitado')
              break;
            case 'auth/operation-not-allowed':
              Alert.alert('Erro', 'Problemas técnicos ao cadastrar')
              break;
          }

        }
        )
    } else {
      Alert.alert('Alerta', 'Por favor, preencha os campos acima')
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.divSuperior}>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            value={name}
            onChangeText={text => setName(text)}
            keyboardType="default"
            returnKeyType="next"


          />
          <TextInput

            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            returnKeyType="next"

          />
          <TextInput

            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            keyboardType="default"
            returnKeyType="next"

          />
          <TextInput

            placeholder="Confirmar senha"
            value={confPassword}
            onChangeText={text => setConfPassword(text)}
            style={styles.input}
            secureTextEntry
            keyboardType="default"
            returnKeyType="send"

          />
        </View>

        <View style={styles.divInferior}>
          <Button texto='Registre-se' onClick={handleSignup} />
        </View>

      </ScrollView>
    </SafeAreaView>


  )
}

export default RegisterScreen

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

},)