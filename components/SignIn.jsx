import { Text, View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { Button } from 'react-native-web';
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
    return (
      <View >
        <View style={{
        }}>

        <FormikTextInput name="username" placeholder="Username" />
        </View>
        <View style={{}}>
        <FormikTextInput secureTextEntry name="password" placeholder="Password" />
        </View>
        <Button titleStyle = {{fontSize: 15}} title="Sign in" onPress={onSubmit} />
      </View>
    );
  };

const Login = () => {
    const onSubmit = values => {
    const username = values.username;
    const password = values.password;

    if (username === "Niko" && password === "pr2jk") {
      console.log('Login successful')
    }
  };

  return (
    <View style={{
      flex: 30,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
        <Text style={{fontSize: 20}} fontWeight='bold'>Login</Text>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
        </Formik>
    </View>
  );
};

export default Login;