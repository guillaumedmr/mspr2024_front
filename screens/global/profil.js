import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../../components/global/header';
import Footer from '../../components/global/footer';
import { urlAPI, accessToken } from '../../global';

const Profil = () => { 

  const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(urlAPI + '/user/get_info', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données du profil');
                }

                const data = await response.json();
                setUserData(data.user); 
                console.log(userData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <View style={styles.container}>
            <Header/>
                <Image
                    source={require('../../assets/global/profil/profil.png')}
                    style={styles.img_profil}
                />

                {userData ? ( // Vérifiez si userData est null
                    <>
                        <Text style={styles.name}>{userData.nom} {userData.prenom}</Text>
                        <View style={styles.containerInfo}>
                            <View style={styles.info_line}>
                                <Image source={require('../../assets/global/icons/envelope-fill.png')} />
                                <Text style={styles.key_line_info}>Email</Text>
                                <Text>{userData.email}</Text>
                            </View>
                            <View style={styles.info_line}>
                                <Image source={require('../../assets/global/icons/balloon-fill.png')} />
                                <Text style={styles.key_line_info}>Date de naissance</Text>
                                <Text>{userData.dateNaissance}</Text>
                            </View>
                        </View>
                    </>
                ) : (
                    <Text>Chargement en cours...</Text>
                )}
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
