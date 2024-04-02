import { StatusBar } from 'expo-status-bar'
import { Route, Routes, Navigate, NativeRouter } from 'react-router-native'
import { Platform, StyleSheet, View } from 'react-native'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient'
import RepositoryList from './src/components/RepositoryList'
import AppBar from './src/components/AppBar'
import SignIn from './src/components/SignIn'
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/contexts/AuthStorageContext'

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => (
  <View style={styles.container}>
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <AppBar style={{ flex: 1 }} />
          <Routes style={{ flex: 10 }}>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/" element={<RepositoryList />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
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
