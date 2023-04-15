import { getAuth, signOut } from 'firebase/auth'
import { app } from '../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation, CommonActions } from '@react-navigation/core'
import ButtonFunction from '../../src/components/ButtonFunction';
import { COLORS } from '../../src/assets/colors'
import { useEffect } from 'react'
import LogoutButton from '../../src/components/LogoutButton'
import Favorites from '../../src/assets/imagens/icon_Favorite.png'
import PECS from '../../src/assets/imagens/icon_PECS.png'
import TextVoice from '../../src/assets/imagens/icon_TextVoice.png'

const HomeScreen = () => {
  const auth = getAuth(app);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      //configura a barra superior
      title: 'Usuários', //TODO: como adicionar o nome do usuário automaticamente?
      headerStyle: { backgroundColor: COLORS.primary },
      headerTitleStyle: { color: COLORS.white },
      headerRight: () => <LogoutButton />
    })
  }, []);

  const toFavorites = () => {
    navigation.navigate("FavoriteScreen")
}

  

  return (
    <View style={styles.container}>
      <View style={styles.divUm}>
        <Image
          style={styles.image}
          source={require('../../src/assets/imagens/templateLogo.png')}
          accessibilityLabel='logo do app'
        />

      </View>
      
      <View style={styles.divDois}> 
        <ButtonFunction texto="Comunicação Alternativa Aumentada" root = {PECS}/>
      </View>

      <View style={styles.divTres}>
        <ButtonFunction texto="Texto para áudio" root = {TextVoice}/>
      </View>
      <View style={styles.divQuatro}>
        <ButtonFunction texto="Favoritos" root = {Favorites} onClick={toFavorites}/>
      </View>
    </View>
  );

  
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divUm: { flex: 2, alignItems: 'center' },
  divDois: { flex: 3, alignItems: 'center' },
  divTres: { flex: 3, alignItems: 'center' },
  divQuatro: { flex: 3, alignItems: 'center' },
  image: {
    width: 105,
    height: 100,
    margin: 20,
  },
});