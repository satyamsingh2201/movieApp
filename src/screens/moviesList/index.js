import React from "react";
import { FlatList } from 'react-native'
import ListItem from "../../component/listItem";
import Toolbar from "../../common/toolbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetMoviesQuery } from "../../services";
import Loading from "../../common/Loading";
import ErrorView from "../../common/errorView";

export default MovieListScreen = (props) => {

    const { data, error, isLoading, isError } = useGetMoviesQuery();

    const _listItem = ({ item }) => {
        return (
            <ListItem
                item={item}
                onPress={navigateToDetails}
            />
        )
    }

    const navigateToDetails = (item) => {
        props.navigation.navigate('movieDetail', { id: item.id })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Toolbar {...props} title="Movies" />
            {isLoading ?
                <Loading />
                :
                isError && error ?
                    <ErrorView message={error.data || 'Unknown Message'} />
                    :
                    <FlatList
                        data={data?.results}
                        renderItem={_listItem}
                        keyExtractor={item => item?.id}
                    />
            }

        </SafeAreaView>
    )
}