import { View, StyleSheet, Text } from 'react-native'
import { Link } from 'react-router-native'

import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  flexContainer: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    alignSelf: 'stretch',
    backgroundColor: '#24292e',
  },
})

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <Link to="/">
        <Text style={{ color: 'white' }}>Repository</Text>
      </Link>
      <Link to="/signin">
        <Text style={{ color: 'white' }}>Sign In</Text>
      </Link>
    </View>
  )
}

export default AppBar
