import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { app } from '../../firebase'
import React, { useEffect, useState } from 'react'
import { Container, FlatList } from './style';
import Item from './item'
import Button from '../../src/components/Button';

const FavoriteScreen = () => {
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [data, setData] = useState([]);

  const getTextVoiceCache = async () => {
    try {
      const value = await AsyncStorage.getItem('TextVoice')
      if (value !== null) {
        let d = [];
        const fav = {
          id: value.id,
          message: value,
        }
        d.push(fav);
        setData(d);
        console.log(value)
      }
    } catch (e) {
      // error reading value
    }
  }
  const removeFew = async () => {
    const keys = ['TextVoice']
    try {
      await AsyncStorage.multiRemove(keys)
    } catch(e) {
      // remove error
    }
  
    console.log('Done')
  }
  useEffect(() => { getTextVoiceCache() },)


  /*
  const getFav = () => {
  getDocs(collection(db, "user/" + auth.currentUser.uid + "/fav/TextVoice"))
    .then((querySnapshot) => {
      let d = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const fav = {
          id: doc.id,
          message: doc.data().message,
        }
        d.push(fav);
      })
      console.log(d);
      setData(d);
    })
    .catch((e) => {
      console.log('FavoriteScreen, getDoc' + e)
    })}

    useEffect(() => {
      getFav();
    }, []);
    */
  const routeUser = (item) => {
    console.log(item)
  }

  const renderItem = ({ item }) => <Item item={item} onPress={() => routeUser(item)} />;

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button texto='Excluir Itens Salvos' onClick={removeFew} />
    </Container>
  );
};

export default FavoriteScreen;