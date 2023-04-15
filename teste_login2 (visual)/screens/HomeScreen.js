import { getAuth, signOut } from 'firebase/auth'
import { app } from '../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation, CommonActions } from '@react-navigation/core'
import ButtonFunction from '../src/components/ButtonFunction';
import { COLORS } from '../src/assets/colors'
import { useEffect } from 'react'
import LogoutButton from '../src/components/LogoutButton'



function HomeScreen() {
  const auth = getAuth(app);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      //configura a barra superior
      //headerLeft: false,
      title: 'Usuários',
      headerStyle: { backgroundColor: COLORS.primary },
      headerTitleStyle: { color: COLORS.white },
      headerRight: () => <LogoutButton />
    });
  }, []);

  const toTextToSpreech = () => {
    navigation.navigate("TextToSpreech")
  }


  return (
    <View style={styles.container}>
      <View style={styles.divUm}>
        <Image
          style={styles.image}
          source={require('../src/assets/imagens/templateLogo.png')}
          accessibilityLabel='logo do app' />

      </View>

      <View style={styles.divDois}>
        <ButtonFunction texto="Comunicação Alternativa Aumentada" />
      </View>

      <View style={styles.divTres}>
        <ButtonFunction
          texto="Texto Para Voz"
          onClick={toTextToSpreech} />
      </View>
      <View style={styles.divQuatro}>
        <ButtonFunction texto="Favoritos" />
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
  divUm: { flex: 2, alignItems: 'center' },
  divDois: { flex: 3, alignItems: 'center' },
  divTres: { flex: 3, alignItems: 'center', backgroundColor: '#fff',},
  divQuatro: { flex: 3, alignItems: 'center' },
  image: {
    width: 105,
    height: 100,
    marginTop: 40,
  },
});