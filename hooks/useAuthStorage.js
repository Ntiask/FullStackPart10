import { useContext } from 'react'; 
import AuthStorageContext from '../src/Contexts/AuthStorageContext';

const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};

export default useAuthStorage;