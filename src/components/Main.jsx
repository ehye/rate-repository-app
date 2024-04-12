import { View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import AppBar from './AppBar'
import SingleRepository from './SingleRepository'

const Main = () => {
  return (
    <View>
      <AppBar style={{ flex: 1 }} />
      <Routes style={{ flex: 10 }}>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/:id" element={<SingleRepository />} />
      </Routes>
    </View>
  )
}

export default Main
