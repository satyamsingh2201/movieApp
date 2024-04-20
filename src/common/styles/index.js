import { StyleSheet } from "react-native";
import Colors from "../colors";
import { HEADER_HEIGHT } from "../constant";

const MyStyles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        height: 100,
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 10
    },
    imageStyle: {
        height: '100%',
        width: 100,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        resizeMode: 'stretch'
    },
    imagePoster: {
        height: 300,
        width: '100%',
        resizeMode: 'cover'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    subtitle: {
        fontSize: 16,
        marginHorizontal: 10
    },
    space10: {
        margin: 10
    },
    txtToolbarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        textAlign: 'center'
    },
    toolbarTitleContainer: {
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50
    },
    horizontal: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    toolbarContainer: {
        height: undefined,
        minHeight: HEADER_HEIGHT,
        width: '100%',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        alignSelf: 'center'
    },
    loading: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100,
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    absoluteCenter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        zIndex: 1,
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.textDarkGray,
        borderRadius: 10,
        padding: 15,
    },
    networkTextTitle: {
        color: Colors.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
    networkTextSubtitle: {
        color: Colors.black,
        fontSize: 16,
    },
});

export default MyStyles;