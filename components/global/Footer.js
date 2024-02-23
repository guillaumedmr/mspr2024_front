import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';


const Footer = ({ onMiddleImagePress }) => {
    return (
        <View style={styles.footer}>
            <View style={styles.iconsContainer}>
                <Image
                    source={require('../../assets/global/footer/home.png')}
                    style={styles.logo}
                />
                <TouchableOpacity onPress={onMiddleImagePress}>
                    <Image
                        source={require('../../assets/global/footer/Group_216.png')}
                        style={styles.logo}
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/global/footer/doc.png')}
                    style={styles.logo}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 100,
        bottom: 40,
        position: 'absolute',
        width: 428,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginHorizontal: 40,
    },
});

export default Footer;
