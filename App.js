
import Main from './src/Main';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <>
    <NativeRouter>
      <Main />
    </NativeRouter>
    <StatusBar style="auto" />
  </>
  );
}
