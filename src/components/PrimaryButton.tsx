
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fontSizes } from '../styles/variables';

const styles = StyleSheet.create({
    constainer: {
        textAlign: 'center',
        height: 50,
        alignContent: 'center',
        justifyContent:'center',
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.borderColor,
        backgroundColor: colors.primary,
    },
});

export const PrimaryButton = ({label}: any) => {

    return(
        <TouchableOpacity style={styles.constainer}>
            <Text style={{color: colors.black, textAlign: 'center', fontSize: fontSizes.btnText, fontWeight: '900'}}> {label} </Text>
        </TouchableOpacity>
    );
}