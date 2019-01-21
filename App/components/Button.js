import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.primary,
        marginVertical: 7
    },
    containerOutline: {
        backgroundColor: 'transparent',
        borderColor: colors.border
    },
    text: {
        color: colors.white,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '500'
    },
    textOutline: {
        color: colors.primary
    }
})

export const Button = ({ onPress = () => {}, children = "", outline = false} ) => {

    const containerStyle = [styles.container];
    const textStyle = [styles.text];

    if (outline) {
        containerStyle.push(styles.containerOutline)
        textStyle.push(styles.textOutline)
    }

    return (
        <TouchableOpacity
            style={containerStyle}
            onPress={onPress}
            outline
        >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}