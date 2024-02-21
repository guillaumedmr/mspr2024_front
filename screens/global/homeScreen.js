import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>HOME SCREEN</Text>
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
  },
});

export default HomeScreen;