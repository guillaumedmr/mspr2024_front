import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../../components/global/header';
import Footer from '../../components/global/footer';

const Profil = () => { 

    return (
        <View style={styles.container}>
            <Header/>
                <Image
                    source={require('../../assets/global/profil/profil.png')}
                    style={styles.img_profil}
                />

                <Text style={styles.name}>DAUMUR Guillaume</Text>


                <View style={styles.containerInfo}>
                  <View style={styles.info_line}>
                      <Image source={require('../../assets/global/icons/envelope-fill.png')} />
                      <Text style={styles.key_line_info}>Email</Text>
                      <Text>guillaume@daumur.fr</Text>
                  </View>
                  <View style={styles.info_line}>
                      <Image source={require('../../assets/global/icons/balloon-fill.png')} />
                      <Text style={styles.key_line_info}>Date de naissance</Text>
                      <Text>11/05/2003</Text>
                  </View>
                </View>
                

            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 150,
      },  
      img_profil: {
        width: 150,
        height: 150,
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      containerInfo: {
        width: 250,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
      },
      key_line_info: {
        fontWeight: 'bold',
        color: "#484648",
      },
      value_line_info: {
        fontWeight: 'bold',
        color: "#828693",
      },
      info_line: {
        width: 250,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
});

export default Profil;
