import { ScrollView, StyleSheet, Text, Pressable } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import useAuthStorage from '../hooks/useAuthStorage'
import { GET_CURRENT_USER } from '../graphql/query'
import { useQuery, useApolloClient } from '@apollo/client'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  flexContainer: {
    backgroundColor: '#24292e',
    paddingTop: '30px',
    paddingBottom: '20px',
    paddingHorizontal: '10px',
  },
  barLink: {
    color: 'white',
    marginRight: '10px',
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

  const { data, loading } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
  })

  if (loading) {
    return 'Loading...'
  }

  if (data == null) {
    return (
      <ScrollView horizontal style={styles.flexContainer}>
        <Link to="/">
          <Text style={styles.barLink}>Repository</Text>
        </Link>
        <Link to="/sign-in">
          <Text style={styles.barLink}>Sign In</Text>
        </Link>
        <Link to="/sign-up">
          <Text style={styles.barLink}>Sign Up</Text>
        </Link>
      </ScrollView>
    )
  } else {
    return (
      <ScrollView horizontal style={styles.flexContainer}>
        <Link to="/">
          <Text style={styles.barLink}>Repository</Text>
        </Link>
        <Link to="/create-review">
          <Text style={styles.barLink}>Create a review</Text>
        </Link>
        <Link to="/my-review">
          <Text style={styles.barLink}>My reviews</Text>
        </Link>
        <Pressable onPress={handleSignOut}>
          <Text style={styles.barLink}>Sign Out</Text>
        </Pressable>
      </ScrollView>
    )
  }
}

export default AppBar
