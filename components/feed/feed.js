import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from './card';
import { urlAPI } from '../../global';

const Feed = () => {
  const [feed, setFeed] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  useEffect(() => {
    fetchFeedData();
    const interval = setInterval(fetchFeedData, 10000);
    return () => clearInterval(interval);
  }, [currentPage]); // Re-fetch data when currentPage changes

  const fetchFeedData = async () => {
    try {
      const response = await fetch(urlAPI + '/user/get_feed?page=' + currentPage, {
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

  const totalPages = Math.ceil(feed ? feed.length / cardsPerPage : 0);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {feed ? (
        <>
          {feed.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage).map((post, index) => (
            <Card key={index} title={post.user} nom_animal={post.nom_animal} description={post.fun_fact} location={post.coordonnee_empreinte} date={post.date_empreinte} imageUri={{ uri: `data:image/jpeg;base64,${post.base64}` }} />
          ))}
          <View style={styles.pagination}>
            <TouchableOpacity onPress={handlePreviousPage} disabled={currentPage === 1}>
              <Text style={styles.paginationButton}>{'<'}</Text>
            </TouchableOpacity>
            <Text>{currentPage} / {totalPages}</Text>
            <TouchableOpacity onPress={handleNextPage} disabled={currentPage === totalPages}>
              <Text style={styles.paginationButton}>{'>'}</Text>
            </TouchableOpacity>
          </View>
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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationButton: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  chargement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Feed;
