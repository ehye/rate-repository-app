import { Route, Routes, Navigate } from 'react-router-native'
import { Platform, StyleSheet, View } from 'react-native'

import RepositoryList from './RepositoryList'
import SignIn from './SignIn'

const Main = () => {
  return (
    <View style={styles.container}>
      <Routes style={{ flex: 10 }}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial ',
  },
})

export default Main
