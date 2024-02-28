import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Alert, Modal, TouchableOpacity } from 'react-native';
import { urlAPI, accessToken } from '../../global';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
const navigation = useNavigation();
const [image, setImage] = useState(null);
const [location, setLocation] = useState(null);
const [modalVisible, setModalVisible] = useState(false); 
const [selectedImage, setSelectedImage] = useState(null);
const [newImage, setNewImage] = useState(null); 
const [loading, setLoading] = useState(null); // 0 : en attente | 1 : chargement | 2 : resultat

useEffect(() => {
    console.log('Loading:', loading);
}, [loading]);


useEffect(() => {
    (async () => {
    const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
    const { status: galleryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraStatus !== 'granted' || galleryStatus !== 'granted') {
        Alert.alert('Permission denied', 'Camera or camera roll permission was denied');
        return;
    }

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permission denied', 'Permission to access location was denied');
        return;
    }

    try {
        let location = await Location.getCurrentPositionAsync({});
        console.log('Location:', location);
        setLocation(location);
    } catch (error) {
        console.error('Error getting location:', error);
        Alert.alert('Error', 'Failed to get location');
    }
    })();
}, []);

const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({ 
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    base64: true,
    });

    setModalVisible(true);

    if (!result.cancelled) {
        setImage(result.uri);

        if (location) {
            const newImageData = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            base64: result.assets[0].base64,
            };

            setNewImage(newImageData); 

            setSelectedImage(newImageData.base64);

            setLoading(0);

            return newImageData;
        } else {
            Alert.alert('Erreur', "Impossible d'obtenir la localisation.");
        }
    }
};

const sendImage = async () => {
    if (newImage) {
    setLoading(1);

    try {
        const response = await fetch(urlAPI + '/images/upload_image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(newImage),
            });  
        if (response.ok) {
            setLoading(2);
        } else {
            setLoading(0);
            throw new Error("Erreur lors de l'envoi !");
        }
    } catch (error) {
        Alert.alert('Erreur', error.message);
    }
    } else {
    Alert.alert('Erreur', "Aucune image à envoyer !");
    }
};

const toPage = async (page) => {
    navigation.navigate(page);
};

return (
    <>
    <View style={styles.footer}>
        <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => toPage('Home')}>
            <Image
                source={require('../../assets/global/footer/home.png')}
                style={styles.logo}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImage}>
                <Image
                    source={require('../../assets/global/footer/Group_216.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toPage('Historique')}>
            <Image
                source={require('../../assets/global/footer/doc.png')}
                style={styles.logo}
            />
            </TouchableOpacity>
        </View>
    </View>
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
        setModalVisible(!modalVisible);
    }}
    >
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        {loading === 0 && (
            <>
            {selectedImage && <Image source={{ uri: `data:image/jpeg;base64,${selectedImage}` }} style={styles.selectedImage} />}
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text style={styles.closeTextButton}>Fermer</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.valideButton}
                onPress={sendImage}
            >
                <Text style={styles.valideTextButton}>Lancer la recherche</Text>
            </TouchableOpacity>
            </>
        )}

        {loading === 1 && (
            <Image source={require('../../assets/global/loading.gif')} style={styles.loadingGif} />
        )} 
        
        {loading === 2 && (
            <>
            <Text>Vous êtes un RAT</Text>
            {selectedImage && <Image source={require('../../assets/global/cafard.png')} style={styles.selectedImage} />}
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text style={styles.closeTextButton}>Fermer</Text>
            </TouchableOpacity>
            </>
        )}
        </View>
    </View>
    </Modal>
    </>
);
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#FFFFFF',
        height: 90,
        paddingBottom: 10,
        bottom: 0,
        position: 'absolute',
        width: '100%',
        zIndex: 999,
    },
    iconsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginHorizontal: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    closeTextButton: {
        color: '#31C48D',
        fontWeight: 'bold',
    },
    sendButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#31C48D',
        borderRadius: 20,
    },
    sendTextButton: {
        color: '#fff',
        fontWeight: 'bold',
    },
    selectedImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
});

export default Footer;
