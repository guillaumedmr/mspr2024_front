import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../../components/global/footer';
import Header from '../../components/global/header';
import Feed from '../../components/feed/feed';

const HomeScreen = () => { 

  return (
    <View style={styles.container}>
      <Header/>
      <Feed/>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 115,
  },
});

export default HomeScreen;
