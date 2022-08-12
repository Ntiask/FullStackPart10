import { LOGIN } from '../components/graphql/Mutations'
import { useMutation } from '@apollo/client';
import { useState } from 'react'
import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
    const client = useApolloClient();
    const authStorage = useAuthStorage();
    const [state , setState] = useState({})
    const [mutate] = useMutation(LOGIN, {
        variables:state
    });

    const signIn = async ({ username, password }) => {
        setState({"credentials": {"username": username, "password": password}})
        const res = await mutate()
        authStorage.setAccessToken(res.data.authenticate.accessToken)
        client.resetStore()
        return res
    };

    return [signIn];
  };

export default useSignIn;