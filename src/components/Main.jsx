import { View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import AppBar from './AppBar'
import SingleRepository from './SingleRepository'
import CreateReview from './CreateReview'

const Main = () => {
  return (
    <View>
      <AppBar style={{ flex: 1 }} />
      <Routes style={{ flex: 10 }}>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/:id" element={<SingleRepository />} />
        <Route path="/create-review" element={<CreateReview />} />
      </Routes>
    </View>
  )
}

export default Main
