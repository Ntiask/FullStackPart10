import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link, useNavigate } from 'react-router-dom';
import { ScrollView } from 'react-native-web';
import { useQuery } from '@apollo/client';
import { WHOAMI } from './graphql/queries';
import Text from './Text';
import { Pressable } from 'react-native-web';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#24292e",
    flexGrow: 1,
    flexShrink: 1,
    opacity: 50
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});

const AppBar = () => {
  const navigate = useNavigate()
  const client = useApolloClient();
  const authStorage = useAuthStorage()
  const {data, loading, error} = useQuery(WHOAMI)

  if (loading || error) return <Text>Loading...</Text>

  const logout = () =>{
    authStorage.removeAccessToken()
    client.resetStore()
    navigate("/")
  }

  return (
        <ScrollView>
            <View style={styles.container}>      
                <View style={styles.links}>
                    <Link style={{
                                  color: 'white',
                                  fontWeight: 'bold',
                                }} to="/">Repositories</Link>
                    {data.me === null ? <Link style={{
                                  color: 'white',
                                  fontWeight: 'bold',
                                }} to="/login">Sign in</Link>: 
                                <Pressable onPress={()=>logout()}>
                                <Text style={{
                                  color: 'white',
                                  fontWeight: 'bold',
                                }} >Sign out
                                </Text>
                                </Pressable>
                                }
                </View>
            </View>
        </ScrollView>
    )
};

export default AppBar;