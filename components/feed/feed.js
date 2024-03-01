import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Card from './card';
import { urlAPI } from '../../global';

const Feed = () => {

  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const fetchFeedData = async () => {
      try {
        const response = await fetch(urlAPI + '/user/get_feed', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération du feed !");
        }

        const data = await response.json();
        setFeed(data.feed);
      } catch (error) {
        console.error(error);
      }
    };

    const interval = setInterval(() => {
      fetchFeedData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {feed ? (
            <>
              {feed.map((post, index) => (
                <Card key={index} title={post.user} nom_animal={post.nom_animal} description={post.fun_fact} location={post.coordonnee_empreinte} date={post.date_empreinte} imageUri={require('../../assets/global/lion.jpg')} />
              ))}
            </>
          ) : (
            <View style={styles.chargement}>
              <Text>Chargement en cours...</Text>
            </View>
          )}
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
  chargement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Feed;
