import React from 'react'
import { Text, View, TouchableOpacity, Image } from "react-native"
import MyStyles from '../styles'
import Colors from '../colors'

const Toolbar = (props) => {

    return (
        <View style={[MyStyles.horizontal, MyStyles.toolbarContainer]}>
            {props?.title && <View style={MyStyles.toolbarTitleContainer}>
                <Text style={MyStyles.txtToolbarTitle}> {props?.title} </Text>
            </View>}
            {props?.isBack &&
                <TouchableOpacity activeOpacity={0.7} style={{ padding: 16 }} onPress={() => { props.navigation.goBack() }}>
                    <Image source={require('../../images/back.png')} style={{ tintColor: Colors.black }} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default Toolbar