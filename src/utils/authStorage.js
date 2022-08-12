import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const Token = await AsyncStorage.getItem(`${this.namespace}:Token`)
    return Token ? JSON.parse(Token) : []
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
        `${this.namespace}:Token`,
        JSON.stringify(accessToken),)
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:Token`);
  }
}

export default AuthStorage;