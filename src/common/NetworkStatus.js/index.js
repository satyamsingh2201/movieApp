import React, { useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const NetworkStatus = () => {

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            { !state?.isConnected && ToastAndroid.show('Network Status: Disconnected', ToastAndroid.LONG) }
        });

        return () => unsubscribe();
    }, []);
};

export default NetworkStatus;
