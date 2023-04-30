import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection, getDoc, doc, setDoc, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { app } from '../../firebase'
import React, { useEffect, useState } from 'react'
import { Container, FlatList } from './style';
import Item from './item'
import Button from '../../src/components/Button';
import { CommonActions } from '@react-navigation/native';

const FavoriteScreen = ({ navigation }) => {
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [data, setData] = useState([]);

  const getMessage = () => {
    getDoc(doc(db, "users", auth.currentUser.uid, "fav", auth.currentUser.uid))
      .then((doc) => {
        let d = []
        for (const value of doc.data().message.values()) {
          const user = {
            message: value
          }
          d.push(user)
          setData(d)
        }
        //console.log(d)

        //console.log(value);

        /*
                const iterator = doc.data().message.values();
                for (const value of iterator) {
                  //console.log(value);
        
                  let d = []
                  const user = {
                    message: value
                  }
                  d.push(user)
                  setData(d)
                  console.log(d)
        
        
                }
        */
      })
      .catch((e) => {
        console.log('FavoriteScreen, getMessage' + e)
      })
  }

  //Coloca um detederminado item da lista (o que o usuário clica) como um parametro numa rota navigate para a tela desejada
  const routeUser = (item) => {
    //console.log(item);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'TextToSpeech',
        params: { user: item },
      }),
    )
  }

  const renderItem = ({ item }) =>
    <Item item={item} onPress={() => routeUser(item)} />;

  useEffect(() => {
    getMessage()
  }, [])

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
      <Button texto='Excluir Itens Salvos' onClick={() => { }} />
    </Container>
  );
};

export default FavoriteScreen;