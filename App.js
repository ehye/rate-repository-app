import { StatusBar } from 'expo-status-bar'
import { NativeRouter } from 'react-router-native'
import { Route, Routes, Navigate } from 'react-router-native'
import { StyleSheet, View } from 'react-native'
import RepositoryList from './components/RepositoryList'
import AppBar from './components/AppBar'
import SignIn from './components/SignIn'

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <AppBar />
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<RepositoryList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </NativeRouter>
      {/* <RepositoryList /> */}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
