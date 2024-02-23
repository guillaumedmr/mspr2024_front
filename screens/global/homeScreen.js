import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../../components/global/footer';
import Header from '../../components/global/header';
import Feed from '../../components/feed/feed';

const HomeScreen = () => { 

  return (
    <View style={styles.container}>
      <Header/>
        <Feed style={styles.feed} />
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
  feed: {
    
  }
});

export default HomeScreen;
