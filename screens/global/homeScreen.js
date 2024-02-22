import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, Modal, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { urlAPI } from '../../global';

const HomeScreen = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null);

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
  
    if (!result.canceled) {
      setImage(result.uri);
  
      if (location) {
        const newImage = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          timestamp: location.timestamp,
          base64: result.assets[0].base64,
        };

        setSelectedImage(newImage.base64);
  
        const response = await fetch(urlAPI + '/images/upload_image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newImage),
        });
  
        if (response.ok) {
          console.log('Image envoyé !', newImage)
        } else {
          Alert.alert('Erreur', "Erreur lors de l'envoi !");
        }
      } else {
        Alert.alert('Erreur', "Impossible d'obtenir la localisation.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>HOME SCREEN</Text>
      <Button title="Take a photo" onPress={pickImage} />

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
            {selectedImage && <Image source={{ uri: `data:image/jpeg;base64,${selectedImage}` }} style={styles.selectedImage} />}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeTextButton}>Fermer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.valideButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.valideTextButton}>Lancer la recherche</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
  valideButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#31C48D',
    color: '#fff',
    borderRadius: 20,
  },
  valideTextButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;
