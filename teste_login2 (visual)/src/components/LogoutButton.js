import styled from 'styled-components/native';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native'


const ButtonExit = styled.TouchableHighlight`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`
const Image = styled.Image`
  width: 45px;
  height: 45px;

`
const auth = getAuth(app);
//: Reload do app não está funcionando
const LogoutButton = () => {
  const navigation = useNavigation();
  const unLog = () => {
    AsyncStorage.removeItem('user')
      .then(() => {
        signOut(auth)
          .then(() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  { name: 'Preload' }],
              })
            )
          })
          .catch((e) => {
            console.log('LogoutButton, signOut' + e)
          })
      })
      .catch((e) => {
        console.log('LogoutButton, unLog em AsyncStorage.removeItem' + e)

      })
  }

  return (
    <ButtonExit onPress={unLog} underlayColor="transparent">
      <Image
        source={require('../assets/imagens/exit.png')}
        accessibilityLavel="Botão sair"
      />
    </ButtonExit>
  )
}

export default LogoutButton;