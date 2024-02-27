import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CardHistorique = ({ date, title, locationText, description, imageUri }) => {
  return (
    <View style={styles.cardContainer}>
      <Image 
        source={ imageUri }
        style={styles.styleImage}
      />
        <View style={styles.textContainer}>
          <Text style={styles.dateText}>{date}</Text>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.locationText}>{locationText}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleImage: {
    width: 100,
    height: 100,
  },
  textContainer: {
    alignSelf: 'flex-end',
    padding: 10,
    margin: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  locationText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#000',
  },
  descriptionText: {
    fontSize: 14,
    color: '#000',
    width: 250,
  },
});

export default CardHistorique;
