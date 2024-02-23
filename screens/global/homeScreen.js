import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../../components/global/footer';
import Header from '../../components/global/header';

const HomeScreen = () => { 

  return (
    <View style={styles.container}>
      <Header/>
        <Text style={styles.greeting}>HOME SCREEN</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default HomeScreen;
