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
        justifyContent: 'flex-end',
        height: 115,
        position: 'absolute',
        top: 0,
        zIndex: 999,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
    },
    logo: {
        tintColor: 'white',
        width: 130,
        height: 87,
        resizeMode: 'contain',
    },
    profil: {
        tintColor: 'white',
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
});

export default Header;
