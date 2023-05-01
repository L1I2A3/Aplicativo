import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../firebase'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native'
import React, { useEffect } from 'react';
import { Alert } from 'react-native'
import { Container, Image } from './styles';

const Preload = ({navigation}) => {
    const auth = getAuth(app);
    const db = getFirestore(app)

    //tenta pegar o usuário salvo em cache
    const getUserCache = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
            //se retornar não nulo, retornar os dados, do contrário só retorna nulo
        } catch (e) {
            console.log('Preload, getUserCache' + e)
        }
    };

    const loginUser = async () => {
        const user = await getUserCache();
        if (user) {
            //console.log(user.email);
            //console.log(user.password);
            //se ja estiver salvo em cache (logado previametne) ele vai direto pra home
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then(() => {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                                { name: 'Home' }],
                        })
                    )
                })
                .catch((e) => {
                    console.log('Preload, login' + e)
                    switch (e.code) {
                        case 'auth/user-not-found':
                            Alert.alert('Erro', 'Usuário não cadastrado')
                            break;
                        case 'auth/invalid-email':
                            Alert.alert('Erro', 'Email inválido')
                            break;
                        case 'auth/wrong-password':
                            Alert.alert('Erro', 'Senha incorreta')
                            break;
                        case 'auth/user-disabled':
                            Alert.alert('Erro', 'Usuário desabilitado')
                            break;
                    }
                }
                )
        } else {
            //se não estiver salvo em cache ele vai para login para entrar no app
            //console.log("para login")
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Login' }],
                })
            )
        }


    }
    useEffect(() => {
        loginUser();
    }, [])

    return (
        <Container>
            <Image source={require('../../src/assets/imagens/Logo.png')}
                accessibilityLabel="logo do aplicativo CAAmaleão"
            >

            </Image>

        </Container>
    )
}

export default Preload;