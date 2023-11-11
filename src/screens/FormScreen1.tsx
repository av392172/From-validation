import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../components/Button';
import {setEmail, setErrorMsg, setPassword} from '../redux/userSlice';

const FormScreen1 = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {email, password, errorMsg} = useSelector((state: any) => state.user);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmail = (text: any) => {
    dispatch(setEmail(text));
  };
  const handlePassword = (text: any) => {
    dispatch(setPassword(text));
  };
  const isValidEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };
  const isValidPassword = () => {
    const passwordRegex =
      /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d)(?=.*[^A-Za-z0-9].*[^A-Za-z0-9]).{8,}$/;
    if (passwordRegex.test(password)) {
      return true;
    } else {
      return false;
    }
  };
  const handleSave = () => {
    if (isValidEmail()) {
      dispatch(setErrorMsg({emailError: ''}));
    } else {
      const msg = 'Invalid Email ID';
      dispatch(setErrorMsg({emailError: msg}));
    }
    if (isValidPassword()) {
      dispatch(setErrorMsg({passwordError: ''}));
    } else {
      const msg =
        'Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters';
      dispatch(setErrorMsg({passwordError: msg}));
    }
  };
  const handleSaveAndNext = () => {
    handleSave();
    if (isValidEmail() && isValidPassword()) {
      navigation.navigate('Form-2');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Form 1</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={handleEmail}
            style={styles.input}
          />
        </View>
        {errorMsg.emailError && (
          <Text style={styles.errorLable}>{errorMsg.emailError}</Text>
        )}
      </View>
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={handlePassword}
            style={styles.input}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                showPassword
                  ? require('../../assets/eye-open.png')
                  : require('../../assets/eye-close.png')
              }
            />
          </TouchableOpacity>
        </View>
        {errorMsg.passwordError && (
          <Text style={styles.errorLable}>{errorMsg.passwordError}</Text>
        )}
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} disabled={true}>
          <Button title="Back" disabled={true} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleSave}>
          <Button title="Save" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleSaveAndNext}>
          <Button title="Save and Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormScreen1;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    gap: 30,
  },
  heading: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: '#D3D3D3',
    width: '100%',
    borderRadius: 5,
  },
  input: {
    paddingHorizontal: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  wrapper: {
    width: '100%',
  },
  errorLable: {
    color: 'red',
    fontSize: 11,
  },
  btn: {
    width: '100%',
  },
});
