/* eslint-disable react/react-in-jsx-scope */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, dimission, fontSizes } from '../styles/variables';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bgColor,
        width: dimission.width,
        height: dimission.height,
    },

    logoContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    logoImage: {
        width: 120,
        height: 120,
    },

    appTitle: {
        color: colors.white,
        fontSize: fontSizes.title,
        padding: 10,
    },

    warningContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: dimission.width,
        padding: 20,
    },

    btnGroup: {
        width: dimission.width,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
    },

    btnPrimary: {
        textAlign: 'center',
        height: 50,
        alignContent: 'center',
        justifyContent:'center',
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.borderColor,
    },

    btnText: {
        fontSize: fontSizes.btnText,
        color: colors.black,
        fontWeight: '900',
        textAlign: 'center',
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 20,
        width: dimission.width,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function Welcome({navigation}: any) {

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoImage}
                    source={require('../assets/images/logo_circle.png')}
                />
                <Text style={styles.appTitle}>  Evan Global Management </Text>
            </View>

            <View style={styles.warningContent}>
                <Text style={{fontWeight: '800', color: colors.white}}> Risk Warning: </Text>
                <Text style={{lineHeight: 20, textAlign: 'justify', paddingTop: 5, paddingEnd: 5, color: colors.white}}>
                    Trading on financial markets carries risks. Contracts for Difference ('CFDs') are complex financial
                    products that are traded on margin. Trading CFDs carries a high level of risk since leverage can work
                    both to your advantage and disadvantage. As a result, CFDs may not be suitable for all investors
                    because you may lose all your invested capital. You should not risk more than you are prepared to lose.
                    Before deciding to trade, you need to ensure that you understand the risks involved and take into
                    account your investment objectives and level of experience. Click here for our full Risk Disclosure.
                </Text>
            </View>

            <View style={styles.btnGroup}>
                <TouchableOpacity
                    style={{...styles.btnPrimary, backgroundColor: colors.primary }}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{...styles.btnText, color: colors.black}}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.btnPrimary, backgroundColor: colors.black}}>
                    <Text style={{...styles.btnText, color: colors.white}}> Register </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={{fontSize: fontSizes.small, color: colors.white}}> Copyright © 2024 | Evan Global Management. All rights reserved.</Text>
                <Text style={{fontSize: fontSizes.small, color: colors.white}}> V.1.0.0 </Text>
            </View>
        </View>
    );
}
