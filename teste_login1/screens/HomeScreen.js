import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'Login' }],
          })
    );
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>

      <Text>Email: {auth.currentUser?.email} </Text>

      <TouchableOpacity 
      style={styles.button}
      onPress = {handleSignOut}
      >
        
        <Text style={styles.buttonText}>Sign out</Text>

      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.button}
      onPress={()=>navigation.navigate('TextToVoice')} 
      >
        
        <Text style={styles.buttonText}>Texto para voz</Text>

      </TouchableOpacity>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
button: {
  backgroundColor: '#0782F9',
  width: '60%',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 40,
},
buttonText: {
  color: 'blue',
  fontWeight: '700',
  fontSize: 16
},

})