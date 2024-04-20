import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MyStyles from '../styles';

function ErrorView({
    style, message, color
}) {

    return (
        <View style={StyleSheet.flatten([MyStyles.loading, style])}>
            <Text style={MyStyles.subtitle}>{message}</Text>
        </View>
    )
};

export default ErrorView;