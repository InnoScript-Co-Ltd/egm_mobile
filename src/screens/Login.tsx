/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, dimission, fontSizes } from '../styles/variables';
import { BackButton } from '../components/BackButton';
import { InputIcon } from '../components/InputIcon';
import { PrimaryButton } from '../components/PrimaryButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: colors.bgColor,
        height: dimission.height,
    },

    headerText: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
    },

    footer: {
        width: dimission.width,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        position: 'absolute',
        bottom: 10,
    },

    footerText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    footerRegisterText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function Login({navigation}: any) {

    // const [loading, setLoading] = useState(false);
    const loading = false;

    return (
        <ScrollView>
            <View style={styles.container}>
                <BackButton />

                <View style={styles.headerText}>
                    <Text style={{ fontSize: fontSizes.titleBig, color: colors.white }}> Sign In! </Text>
                    <Text style={{ fontSize: fontSizes.title, color: colors.secondary }}> Welcome Back </Text>
                </View>

                <View style={styles.headerText}>
                    <Text style={{ fontSize: fontSizes.normal, color: colors.white, lineHeight: fontSizes.normal + 9 }}>
                        We seek to build lasting partnerships underpinned by trust and credibility.
                    </Text>
                </View>

                <View style={{ padding: 10 }}>
                    <InputIcon
                        icon={require('../assets/icons/envelope.png')}
                        inputMode={'email'}
                        placeholder={'Enter your email address'}
                        keyboardType={'email-address'}
                        enterKeyHint={'enter'}
                        allowFontScaling={true}
                        textContentType={'emailAddress'}
                        secureTextEntry={false}
                        readOnly={loading}
                        onChangeText={(e: string) => console.log(e)}
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <InputIcon
                        icon={require('../assets/icons/security.png')}
                        inputMode={'text'}
                        placeholder={'Enter your password'}
                        keyboardType={'default'}
                        enterKeyHint={'enter'}
                        allowFontScaling={true}
                        readOnly={loading}
                        secureTextEntry={true}
                        onChangeText={(e: string) => console.log(e)}
                    />
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerRegisterText}>
                        <Text style={{ fontSize: fontSizes.normal, color: colors.white }}>
                            Don’t have an account?
                        </Text>
                        <Text
                            style={{ fontSize: fontSizes.large, color: colors.white, fontWeight: '900', paddingLeft: 10 }}
                            onPress={() => navigation.navigate('Register')}
                        >
                            Register
                        </Text>
                    </View>
                    <PrimaryButton
                        label={'LOGIN'}
                    />

                    <View style={styles.footerText}>
                        <Text style={{ fontSize: fontSizes.small, color: colors.white }}> Copyright © 2024 | Evan Global Management. All rights reserved.</Text>
                        <Text style={{ fontSize: fontSizes.small, color: colors.white }}> V.1.0.0 </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
