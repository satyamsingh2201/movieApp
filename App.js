import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'tamagui'
import { Provider } from 'react-redux';
import { store } from './src/store';
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from './tamagui.config'
import AuthorisedStack from './src/routes';

export default function App() {
  return (
    <Provider store={store}>
      <TamaguiProvider config={tamaguiConfig}>
        <AuthorisedStack />
        {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>My button</Text>
        <StatusBar style="auto" />
      </View> */}
      </TamaguiProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
