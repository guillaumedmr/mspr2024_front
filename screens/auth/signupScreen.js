import React, { useState } from 'react';
import { View, Image, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const SignupScreen = () => {

  const navigation = useNavigation();

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState(new Date());
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [motDePasseValide, setMotDePasseValide] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleValidation = async () => {
    if (!nom || !prenom || !email || !motDePasse || !motDePasseValide || !dateNaissance) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
    } else {
      if (motDePasse === motDePasseValide) {
        try {
          const formattedDate = moment(dateNaissance).format('YYYY-MM-DD');

          const userData = {
            prenom,
            nom,
            dateNaissance : formattedDate,
            email,
            mot_de_passe: motDePasse,
          };

          const response = await fetch('https://4010-37-174-251-7.ngrok-free.app/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          if (response.ok) {
            navigation.navigate('Login');
            console.log('Inscription réussie!');
          } else {
            console.log('Erreur lors de l\'inscription', userData);
          }
        } catch (error) {
          console.error('Erreur lors de la requête:', error);
        }
      } else {
        Alert.alert('Erreur', "Le mot de passe n'est pas le même.");
      }
    }
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateNaissance;
    setShowDatePicker(Platform.OS === 'ios');
    setDateNaissance(currentDate);
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
        placeholder="Nom"
        onChangeText={(text) => setNom(text)}
        value={nom}
      />

      <TextInput
        style={styles.input}
        placeholder="Prénom"
        onChangeText={(text) => setPrenom(text)}
        value={prenom}
      />

      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Date de naissance :</Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={dateNaissance}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onDateChange}
            style={styles.datePicker}
          />
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
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

      <TextInput
        style={styles.input}
        placeholder="Confirmez le mot de passe"
        onChangeText={(text) => setMotDePasseValide(text)}
        value={motDePasseValide}
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <Button title="S'inscrire" onPress={handleValidation} color={'#fff'} />
      </View>

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
    marginBottom: -70,
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
    color: '#fff',
    borderRadius: 40, 
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    height: 50,
    borderColor: '#31C48D',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 25,
    padding: 15,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    marginRight: 10,
    // color: '#cfcfd1',
  },
  datePicker: {
    flex: 1,
  },
});

export default SignupScreen;
