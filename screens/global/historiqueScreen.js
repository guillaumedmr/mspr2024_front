import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../../components/global/footer';
import Header from '../../components/global/header';
import CardHistorique from '../../components/historique/historiqueCard';
import { urlAPI, accessToken } from '../../global';

const HistoriqueScreen = () => { 

  const [userDataHisto, setUserDataHisto] = useState(null);

    useEffect(() => {
        const fetchUserDataHisto = async () => {
            try {
                const response = await fetch(urlAPI + '/user/get_historique', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données de l'utilisateur");
                }

                const data = await response.json();
                setUserDataHisto(data.user_historique); 
                console.log(userDataHisto);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserDataHisto();
    }, []);

    return (
      <View style={styles.container}>
        <Header/>
    
        <ScrollView contentContainerStyle={styles.containerScroll}>
          {userDataHisto ? (
            <>
              {userDataHisto.map((historique, index) => (
                <CardHistorique
                  key={index}
                  date={historique.date_empreinte}
                  title={historique.nom_animal}
                  locationText={historique.coordonnee_empreinte}
                  description={historique.fun_fact}
                  imageUri={require('../../assets/global/cafard.png')}
                />
              ))}
            </>
          ) : (
            <View style={styles.chargement}>
              <Text>Chargement en cours...</Text>
            </View>
          )}
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
  chargement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HistoriqueScreen;
