/* eslint-disable react/react-in-jsx-scope */
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, dimission } from '../styles/variables';
import { useEffect, useState } from 'react';

const styles = StyleSheet.create({
    container: {
        width: dimission.width - 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    inputGroup: {
        width: dimission.width - 20,
        backgroundColor: colors.bgInput,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.borderColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },

    input: {
        color: colors.white,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 5,
        paddingRight: 5,
        overflow: 'hidden',
        width: dimission.width - 70,
    },
});

export const InputIcon = ({
    inputMode,
    keyboardType,
    enterKeyHint,
    allowFontScaling,
    readOnly,
    icon,
    textContentType,
    secureTextEntry,
    placeholder,
    onChangeText,
}: any) => {

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (e:string): void => {
        setInputValue(e);
        onChangeText(e);
        return;
    };

    useEffect(() => {
        if(secureTextEntry) {
            setPasswordVisibility(true);
        }
    },[secureTextEntry]);

    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <Image source={icon}
                />
                <TextInput
                    style={{ ...styles.input, width: secureTextEntry ? dimission.width - 110 : styles.input.width }}
                    inputMode={inputMode}
                    keyboardType={keyboardType}
                    enterKeyHint={enterKeyHint}
                    allowFontScaling={allowFontScaling}
                    placeholder={placeholder}
                    placeholderTextColor={colors.secondary}
                    readOnly={readOnly}
                    textBreakStrategy={'highQuality'}
                    textContentType={textContentType}
                    secureTextEntry={passwordVisibility}
                    multiline={!secureTextEntry}
                    value={inputValue}
                    onChangeText={(e) => onChangeHandler(e)}
                />

                {secureTextEntry && (
                    <TouchableOpacity onPress={() =>setPasswordVisibility(!passwordVisibility)}>
                        <Image source={!passwordVisibility ? require('../assets/icons/eye_open.png') : require('../assets/icons/eye_close.png')} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}