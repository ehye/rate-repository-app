import { View, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  flexContainer: {
    paddingTop: Constants.statusBarHeight,
    alignSelf: 'stretch',
    backgroundColor: '#24292e',
  },
})

const AppBar = ({ children }) => {
  return (
    <View style={styles.flexContainer}>
      <Text style={{ color: 'white' }}>{children}</Text>
    </View>
  )
}

export default AppBar
