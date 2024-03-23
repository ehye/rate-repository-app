import { StatusBar } from 'expo-status-bar'
import { Route, Routes, Navigate, NativeRouter } from 'react-router-native'
import { Platform, StyleSheet, View } from 'react-native'
import RepositoryList from './components/RepositoryList'
import AppBar from './components/AppBar'
import SignIn from './components/SignIn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial ',
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <AppBar style={{ flex: 1 }} />
        <Routes style={{ flex: 10 }}>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<RepositoryList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </NativeRouter>
      <StatusBar style="auto" />
    </View>
  )
}
