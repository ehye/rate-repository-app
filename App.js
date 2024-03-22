import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import RepositoryList from './components/RepositoryList'
import AppBar from './components/AppBar'

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar>Repository</AppBar>
      <RepositoryList />
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
