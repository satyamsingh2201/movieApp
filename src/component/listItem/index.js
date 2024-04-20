import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Image, View, Button, } from 'tamagui';
import MyStyles from '../../common/styles';
import { imageBaseUrl } from '../../services';

const ListItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={MyStyles.card}
            onPress={() => { onPress(item) }}>
            <Image source={{ uri: `${imageBaseUrl + item?.poster_path}` }} style={MyStyles.imageStyle} />
            <View>
                <Text style={MyStyles.title} numberOfLines={1}>{item?.original_title}</Text>
                <Text style={MyStyles.subtitle}>Release Data : {item?.release_date}</Text>
            </View>
        </TouchableOpacity>

    );
};


export default ListItem;
