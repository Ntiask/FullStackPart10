import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-dom';
import { ScrollView } from 'react-native-web';


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
  return (
        <ScrollView>
            <View style={styles.container}>      
                <View style={styles.links}>
                    <Link style={{
                                  color: 'white',
                                  fontWeight: 'bold',
                                }} to="/">Repositories</Link>
                    <Link style={{
                                  color: 'white',
                                  fontWeight: 'bold',
                                }} to="/login">Login</Link>
                </View>
            </View>
        </ScrollView>
    )
};

export default AppBar;