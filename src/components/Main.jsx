import { View, StyleSheet } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import Constants from 'expo-constants'

import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import SignUp from './SignUp'
import AppBar from './AppBar'
import SingleRepository from './SingleRepository'
import CreateReview from './CreateReview'
import MyReview from './MyReview'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/:id" element={<SingleRepository />} />
        <Route path="/create-review" element={<CreateReview />} />
        <Route path="/my-review" element={<MyReview />} />
      </Routes>
    </View>
  )
}

export default Main
