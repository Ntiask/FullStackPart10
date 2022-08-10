
import {View } from 'react-native';
import RepositoryList from '../components/RepositoryList';
import AppBar from '../components/AppBar';
import { Route, Routes, Navigate } from 'react-router-native';
import Login from '../components/SignIn'


const Main = () => {
  return (
    <View style = {{
      backgroundColor:"#e1e4e8"}}>
    <AppBar />
    <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<Login />} exact />
    </Routes>
    </View>
  );
};

export default Main;