/* eslint-disable react/react-in-jsx-scope */
import { useNavigation } from '@react-navigation/native'
import {  Image, StyleSheet, TouchableOpacity } from 'react-native'

export const BackButton = () => {

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            margin: 10,
        },
    });

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => navigation.goBack()}
        >
            <Image
                style={{width: 40, height: 40}}
                source={require('../assets/icons/back_btn.png')}
            />
        </TouchableOpacity>
    );
}