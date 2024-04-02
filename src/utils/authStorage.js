import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace
    this.key = `${this.namespace}:token`
  }

  // Get the access token for the storage
  async getAccessToken() {
    const token = await AsyncStorage.getItem(this.key)
    return token ? JSON.parse(token) : ''
  }

  // Add the access token to the storage
  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(this.key, JSON.stringify(accessToken))
  }

  // Remove the access token from the storage
  async removeAccessToken() {
    await AsyncStorage.removeItem(this.key)
  }
}

export default AuthStorage
