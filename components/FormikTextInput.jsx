import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import { View } from 'react-native-web';
import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    fontSize: 10,
    color: "#d73a4a"
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const showError = meta.touched && meta.error;

  return (

    <View>
      <View style = {{borderColor: "grey",
          borderLeftWidth: 2,
          borderRightWidth: 2,
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderRadius: 5,}}>
          <TextInput
              onChangeText={value => helpers.setValue(value)}
              onBlur={() => helpers.setTouched(true)}
              value={field.value}
              error={showError}
              {...props}
            />
        </View>
        <View>
          {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </View>
    </View>

  );
};

export default FormikTextInput;