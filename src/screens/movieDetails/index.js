import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, Text, View } from 'tamagui'
import Toolbar from "../../common/toolbar";
import MyStyles from "../../common/styles";
import { imageBaseUrl, useGetMovieDetailsQuery } from "../../services";
import Loading from "../../common/Loading";
import ErrorView from "../../common/errorView";


export default MovieDetailsScreen = (props) => {
    const { id } = props?.route?.params;

    const { data, error, isLoading, isError } = useGetMovieDetailsQuery(id);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Toolbar {...props} title='Movie Details' isBack={true} />
            {isLoading ?
                <Loading />
                :
                isError && error ?
                    <ErrorView message={error.data || 'Unknown Message'} />
                    :
                    <ScrollView style={{ flexGrow: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={{ uri: `${imageBaseUrl + data?.backdrop_path}` }} style={MyStyles.imagePoster} />
                            <Text style={MyStyles.title}>{data?.original_title}</Text>
                            <Text style={MyStyles.subtitle}>{data?.release_date}</Text>

                            <Text style={MyStyles.title}>Language</Text>
                            <Text style={MyStyles.subtitle}>{data?.spoken_languages.length > 0 && data?.spoken_languages[0].english_name}</Text>

                            <Text style={MyStyles.title}>Overview</Text>
                            <Text style={MyStyles.subtitle}>{data?.overview}</Text>
                        </View>

                    </ScrollView>
            }
        </SafeAreaView>
    )
}