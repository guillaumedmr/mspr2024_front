// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Image } from 'react-native';
import ButtonAuth from './components/global/ButtonAuth';
import LoginScreen from './screens/auth/loginScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {

  const handlePress = () => {
    console.log("Le bouton a été pressé !");
  };

  return (
    <View style={styles.container}>
      
      <Image 
        source={require('./assets/global/logo_wildlens.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <ButtonAuth onPress={() => navigation.navigate('Login')} titre="LOG IN" color={'#31C48D'} colorText={'#fff'} />
      <ButtonAuth onPress={handlePress} titre="SIGN UP" color={'#fff'} colorText={'#31C48D'} />
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
