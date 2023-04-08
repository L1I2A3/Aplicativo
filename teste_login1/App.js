import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from './screens/ForgotPassword';
import TextToVoiceScreen from './screens/TextToVoice';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

 const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        options= {{headerShown: false}} 
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
        options = {forgotPasswordStyle}
        />

        <Stack.Screen 
        name="TextToVoice" 
        component={TextToVoiceScreen} 
        options 
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

const forgotPasswordStyle = {
  title: 'Recuperação de senha',
}
const RegisterScreenStyle = {
  title: 'Registre-se',
}
