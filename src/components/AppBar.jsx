import { ScrollView, StyleSheet, Text, Pressable } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import useAuthStorage from '../hooks/useAuthStorage'
import { ME } from '../graphql/query'
import { useQuery, useApolloClient } from '@apollo/client'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  flexContainer: {
    backgroundColor: '#24292e',
  },
})

const AppBar = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const handleSignOut = async () => {
    console.log('sign out')
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
  }

  const { data, loading } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  })

  if (loading) {
    return 'Loading...'
  }

  if (data.me == null) {
    return (
      <ScrollView horizontal style={styles.flexContainer}>
        <Link to="/">
          <Text style={{ color: 'white' }}>Repository</Text>
        </Link>
        <Link to="/signIn">
          <Text style={{ color: 'white' }}>Sign In</Text>
        </Link>
      </ScrollView>
    )
  } else {
    return (
      <ScrollView horizontal style={styles.flexContainer}>
        <Link to="/">
          <Text style={{ color: 'white' }}>Repository</Text>
        </Link>
        <Pressable onPress={handleSignOut}>
          <Text style={{ color: 'white' }}>Sign Out</Text>
        </Pressable>
      </ScrollView>
    )
  }
}

export default AppBar
