import LoginScreen from './screens/LoginScreen';
import FavoriteScreen from './screens/FavoriteScreen/';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from './screens/ForgotPassword';
import HomeScreen from './screens/HomeScreen/Index';
import Preload from './screens/Preload';
import TextToSpeechScreen from './screens/TextToSpeechScreen/TextToSpeechScreen.js';
import PecsScreen from './screens/PecsScreen';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from './src/assets/colors';



const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} />
      <Stack.Navigator initialRouteName='Preload'>
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={PreLoadStyle}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={RegisterScreenStyle}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={forgotPasswordStyle}
        />
        <Stack.Screen
          name="FavoriteScreen"
          component={FavoriteScreen}
          options={favoriteScreenStyle}
        />

        <Stack.Screen
          name="TextToSpeech"
          component={TextToSpeechScreen}
        //options={forgotPasswordStyle}
        />

        <Stack.Screen
          name="Pecs"
          component={PecsScreen}
        //options={forgotPasswordStyle}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const PreLoadStyle = {
  headerShown: false,
}
const RegisterScreenStyle = {
  title: 'Registre-se',
}

const forgotPasswordStyle = {
  title: 'Recuperação de senha',
}
const favoriteScreenStyle = {
  title: 'Favoritos',
}



