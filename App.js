import { StatusBar } from 'expo-status-bar'
import { NativeRouter } from 'react-router-native'
import { Platform, StyleSheet, View } from 'react-native'
import { ApolloProvider } from '@apollo/client'

import createApolloClient from './src/utils/apolloClient'
import Main from './src/components/Main'
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/contexts/AuthStorageContext'

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => (
  <View style={styles.container}>
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
    <StatusBar style="auto" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial ',
  },
})

export default App
