import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, getDoc, doc, updateDoc, deleteField } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { app } from '../../firebase'
import React, { useEffect, useState } from 'react'
import { Container, FlatList } from './style';
import Item from './item'
import Button from '../../src/components/Button';
import { CommonActions } from '@react-navigation/native';
import { COLORS } from '../../src/assets/colors';

const FavoriteScreen = ({ navigation }) => {
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [data, setData] = useState([]);

  const getMessage = () => {
    let d = []
    getDoc(doc(db, "users", auth.currentUser.uid, "fav", "TextToVoice"))
      .then((doc) => {

        
        for (const value of doc.data().message.values()) {
          const user = {
            message: value,
            src: 'Texto para Voz',
            color: COLORS.primary
          }
         // console.log(user)
          d.push(user)
          setData(d)
        }

      })
      .catch((e) => {
        console.log('FavoriteScreen, getMessage' + e)
      })
    getDoc(doc(db, "users", auth.currentUser.uid, "fav", "PdC"))
      .then((doc) => {
        
        for (const value of doc.data().message.values()) {
          const user = {
            message: value,
            src: 'Prancheta de Comunicação',
            color: COLORS.primarylight
          }
          //console.log(user)
          d.push(user)
          setData(d)
        }
      })
      .catch((e) => {
        console.log('FavoriteScreen, getMessage' + e)
      })
    

  }

  const delALLMessage = () => {
    updateDoc(doc(db, "users", auth.currentUser.uid, "fav", "TextToVoice"), { message: deleteField() })
    updateDoc(doc(db, "users", auth.currentUser.uid, "fav", "PdC"), { message: deleteField() })
      .then(setData(''))
      .catch((e) => {
        console.log('FavoriteScreen, delALLMessage' + e)
      })
  }

  //Coloca um detederminado item da lista (o que o usuário clica) como um parametro numa rota navigate para a tela desejada
  const routeUser = (item) => {
    //console.log(item);
    //TODO: arrumar a parte de PdC para receber bem essas props de mensagem
    if(item.src == 'Prancheta de Comunicação'){
      navigation.dispatch(
      CommonActions.navigate({
        name: 'Pecs',
        params: { user: item },
      }),
    )
    }else{ 
    navigation.dispatch(
      CommonActions.navigate({
        name: 'TextToSpeech',
        params: { user: item },
      }),
    )
    }
  }

  const renderItem = ({ item }) =>
    <Item item={item} onPress={() => routeUser(item)} color={item.color} />;

  useEffect(() => {
    getMessage()
  }, [])

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
      <Button texto='Excluir Itens Salvos' onClick={delALLMessage} />
    </Container>
  );
};

export default FavoriteScreen;