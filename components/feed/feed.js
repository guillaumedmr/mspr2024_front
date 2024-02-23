import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Card from './card';

const Feed = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card title={'Dimitri Koviakkov'} description={'Ma description'} imageUri={require('../../assets/global/lion.jpg')} />
      <Card title={'Dimitri Koviakkov'} description={'Ma description'} imageUri={require('../../assets/global/lion.jpg')} />
      <Card title={'Dimitri Koviakkov'} description={'Ma description'} imageUri={require('../../assets/global/lion.jpg')} />
      <Card title={'Dimitri Koviakkov'} description={'Ma description'} imageUri={require('../../assets/global/lion.jpg')} />
      <Card title={'Dimitri Koviakkov'} description={'Ma description'} imageUri={require('../../assets/global/lion.jpg')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 115,
  },
  block: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Feed;
