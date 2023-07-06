import { app } from '../../firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { Component } from 'react'
import { useNavigation, CommonActions } from '@react-navigation/core'
import { COLORS } from '../../src/assets/colors'
import { useEffect, useState } from 'react'
import ButtonFunction from '../../src/components/ButtonFunction';
import LogoutButton from '../../src/components/LogoutButton'
import Favorites from '../../src/assets/imagens/icon_Favorite.png'
import PECS from '../../src/assets/imagens/icon_PECS.png'
import TextVoice from '../../src/assets/imagens/icon_TextVoice.png'


const HomeScreen = () => {
  const db = getFirestore(app);
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  
  const getUsers = () => {
    getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        let d = [];
        querySnapshot.forEach((doc) => {
          //console.log(doc.id, " => ", doc.data());
          const user = {
            id: doc.id,
            nome: doc.data().nome,
            email: doc.data().email,
          }
          d.push(user);
        })
        //console.log(d);
        setData(d);
      })
      .catch((e) => {
        console.log('HomeScreen, getUsers' + e)
      })
  }
  useEffect(() => {
    navigation.setOptions({
      //configura a barra superior
      title: 'Usuários', //TODO: como adicionar o nome do usuário automaticamente?
      headerStyle: { backgroundColor: COLORS.primary },
      headerTitleStyle: { color: COLORS.white },
      headerRight: () => <LogoutButton />
    });
    getUsers();
  }, []);

  const toFavorites = () => {
    navigation.navigate("FavoriteScreen", { data: data });

  }


  const toTextToSpreech = () => {
    navigation.navigate("TextToSpeech")
  }

  const toPecs = () => {
    navigation.navigate("Pecs")
  }


  return (
    <View style={styles.container}>
      <View style={styles.divUm}>
        <Image
          style={styles.image}
          source={require('../../src/assets/imagens/Logo.png')}
          accessibilityLabel='logo do app'
        />

      </View>

      <View style={styles.divDois}>
        <ButtonFunction texto="Prancheta de Comunicação" 
        root={PECS} 
        onClick={toPecs}/>
      </View>

      <View style={styles.divTres}>

        <ButtonFunction
          texto="Texto Para Voz"
          onClick={toTextToSpreech}
          root={TextVoice} />
      </View>
      <View style={styles.divQuatro}>
        <ButtonFunction texto="Favoritos" 
        root={Favorites} 
        onClick={toFavorites} />
      </View>
    </View>
  );


}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divUm: { flex: 2, alignItems: 'center', },
  divDois: { flex: 3, alignItems: 'center', },
  divTres: { flex: 3, alignItems: 'center', },
  divQuatro: { flex: 3, alignItems: 'center', },
  divCinco: { flex: 3, alignItems: 'center', },
  image: {
    width: 105,
    height: 100,
    margin: 20,
  },
})