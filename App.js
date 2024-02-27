// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Image } from 'react-native';
import ButtonAuth from './components/global/ButtonAuth';
import LoginScreen from './screens/auth/loginScreen';
import SignupScreen from './screens/auth/signupScreen';
import HomeScreen from './screens/global/homeScreen';
import Profil from './screens/global/profil';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profil" component={Profil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const StartScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/global/logo_wildlens.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <ButtonAuth onPress={() => navigation.navigate('Login')} titre="SE CONNECTER" color={'#31C48D'} colorText={'#fff'} />
      <ButtonAuth onPress={() => navigation.navigate('Signup')} titre="S'INSCRIRE" color={'#fff'} colorText={'#31C48D'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100,
  },
  logo: {
    width: 320,
    height: 320,  
    marginBottom: -20,
  },
});
