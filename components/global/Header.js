import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.iconsContainer}>
                <Image
                    source={require('../../assets/global/logo_wildlens.png')}
                    style={styles.logo}
                />
                <Image
                    source={require('../../assets/global/header/person-circle.png')}
                    style={styles.profil}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#31C48D',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 145,
        position: 'absolute',
        top: 0,
        paddingTop: 50,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',

    },
    logo: {
        tintColor: 'white',
        width: 130,
        height: 87,
        resizeMode: 'contain',
        marginRight: 80,
    },
    profil: {
        tintColor: 'white',
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});

export default Header;
