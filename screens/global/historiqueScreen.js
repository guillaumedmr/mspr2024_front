import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../../components/global/footer';
import Header from '../../components/global/header';
import CardHistorique from '../../components/historique/historiqueCard';

const HistoriqueScreen = () => { 

  return (
    <View style={styles.container}>
      <Header/>

      <ScrollView contentContainerStyle={styles.containerScroll}>
        <CardHistorique date={'11-02-2023'} title={'Test'} description={"Voici un fun fact sur la vie de l'animal que l'on a pris en photo"} imageUri={require('../../assets/global/cafard.png')}/>
        <CardHistorique date={'11-02-2023'} title={'Test'} description={"Voici un fun fact sur la vie de l'animal que l'on a pris en photo"} imageUri={require('../../assets/global/cafard.png')}/>
        <CardHistorique date={'11-02-2023'} title={'Test'} description={"Voici un fun fact sur la vie de l'animal que l'on a pris en photo"} imageUri={require('../../assets/global/cafard.png')}/>
      </ScrollView>
        
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
  containerScroll: {
    paddingBottom: 115,
  },
  feed: {
    
  }
});

export default HistoriqueScreen;
