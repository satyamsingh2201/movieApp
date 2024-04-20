import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Animated } from 'react-native';
import Colors from '../colors';
import MyStyles from '../styles';

function Loading({
    style, size, color
}) {

    const [rotateAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            rotateAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start(() => {
            Animated.timing(
                rotateAnim,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }
            ).start(() => rotateAnim.setValue(0));
        });
    }, []);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={StyleSheet.flatten([MyStyles.loading, style])}>
            <Animated.View
                style={{ transform: [{ rotate: spin }] }}
            >
                <ActivityIndicator color={Colors.primary} size='large' />
            </Animated.View>
        </View>
    )
};

export default Loading;