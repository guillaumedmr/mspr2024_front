import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonAuth = ({ onPress, titre, color, colorText }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.bouton, {backgroundColor: color}]}>
        <Text style={[styles.texteBouton, { color: colorText}]}>{titre}</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    bouton: {
      padding: 15,
      margin: 15,
      borderRadius: 50,
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#31C48D',
      width: 250,
    },
    texteBouton: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default ButtonAuth;
  