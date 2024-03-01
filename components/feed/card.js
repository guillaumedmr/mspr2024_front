import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import HeartButton from '../global/heartButton';

const Card = ({ title, nom_animal, description, location, date, imageUri }) => {
    return (
        <View style={styles.card}>
            <Image source={ imageUri } style={styles.image} />
            <View style={styles.content}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity style={styles.heartButton}>
                <HeartButton />
                </TouchableOpacity>
            </View>
            <Text style={styles.animalName}>Espèce : {nom_animal}</Text>
            <Text style={styles.description}>{date}</Text>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
        marginVertical: 10,
        overflow: 'hidden',
        marginLeft: 10,
        marginRight: 10,
        },
    image: {
    width: '100%',
    height: 200,
    },
    content: {
    padding: 20,
    },
    title: {
    fontSize: 18,
    fontWeight: 'bold',
    },
    description: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
    },
    location: {
        fontSize: 14,
        color: '#333',
        marginTop: 5,
        fontStyle: 'italic',
        },
    containerTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    animalName: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default Card;
