import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import ButtonAuth from '../../components/global/ButtonAuth';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    const handleValidation = async () => {
        if (!email || !motDePasse) {
            Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
        } else {
            try {
                const userData = {
                    email,
                    mot_de_passe: motDePasse,
                };

                const response = await fetch('https://4010-37-174-251-7.ngrok-free.app/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });

                if (response.ok) {
                    console.log('Connexion réussie!');
                } else {
                    Alert.alert('Erreur', 'Email ou mot de passe incorrect.');
                }
            } catch (error) {
                console.error('Erreur lors de la requête:', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/global/logo_wildlens.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <TextInput
                style={styles.input}
                placeholder="Adresse Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                onChangeText={(text) => setMotDePasse(text)}
                value={motDePasse}
                secureTextEntry={true}
            />

            <View style={styles.buttonContainer}>
                <Button title="Se connecter" onPress={handleValidation} color="#fff" />
            </View>

            <Image 
                source={require('../../assets/global/horizontalLine.png')}
                style={styles.horizontalLine}
                resizeMode="contain"
            />

            <ButtonAuth onPress={() => navigation.navigate('Signup')} titre="S'inscrire" color={'#fff'} colorText={'#31C48D'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 10,
    },
    logo: {
        width: 320,
        height: 320,  
        marginBottom: 0,
    },
    input: {
        height: 50,
        width: '80%',
        borderColor: '#31C48D',
        borderWidth: 1,
        marginBottom: 20,
        padding: 15,
        borderRadius: 50,
    },
    buttonContainer: {
        width: '80%',
        marginTop: 20,
        padding: 5,
        backgroundColor: '#31C48D',
        borderRadius: 40,
        marginBottom: 0
    },
    horizontalLine: {
        margin: 25,
        marginTop: 40
    }
});

export default LoginScreen;
