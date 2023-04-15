import styled from 'styled-components/native';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Updates  } from 'expo';


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
  const unLog = () => {
    AsyncStorage.removeItem('user')
      .then(() => {
        signOut(auth)
        .then(() => {})
        .catch((e) => {
          console.log('LogoutButton, signOut' + e)
        })
        Updates.reloadAsync()     
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