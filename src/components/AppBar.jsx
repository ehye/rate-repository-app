import { ScrollView, StyleSheet, Text } from 'react-native'
import { Link } from 'react-router-native'

import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  flexContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // paddingTop: Constants.statusBarHeight,
    // alignSelf: 'stretch',
    backgroundColor: '#24292e',
  },
})

const AppBar = () => {
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
}

export default AppBar
