import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../components/Button';
import {
  setAddress,
  setErrorMsg,
  setFirstName,
  setLastName,
} from '../redux/userSlice';

const FormScreen2 = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {firstName, lastName, address, errorMsg} = useSelector(
    (state: any) => state.user,
  );
  const handleFirstName = (text: any) => {
    dispatch(setFirstName(text));
  };
  const handleLastName = (text: any) => {
    dispatch(setLastName(text));
  };
  const handleAddress = (text: any) => {
    dispatch(setAddress(text));
  };
  const navigateBack = () => {
    navigation.goBack();
  };
  const isValidFirstName = () => {
    const firstNameRegex = /^[a-zA-Z]{2,50}$/;
    if (firstNameRegex.test(firstName)) {
      return true;
    } else {
      return false;
    }
  };
  const isValidLastName = () => {
    if (lastName.length) {
      const lastNameRegex = /^[a-zA-Z]+$/;
      if (lastNameRegex.test(lastName)) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
  const isValidAddress = () => {
    if (address.length > 9) {
      return true;
    } else {
      return false;
    }
  };
  const handleSave = () => {
    if (isValidFirstName()) {
      dispatch(setErrorMsg({firstNameError: ''}));
    } else {
      const msg =
        'Must be an alphabets, minimum of 2 character and maximum 50 allowed';
      dispatch(setErrorMsg({firstNameError: msg}));
    }
    if (isValidLastName()) {
      dispatch(setErrorMsg({lastNameError: ''}));
    } else {
      const msg = 'Must be an alphabet';
      dispatch(setErrorMsg({lastNameError: msg}));
    }
    if (isValidAddress()) {
      dispatch(setErrorMsg({addressError: ''}));
    } else {
      const msg = 'Minimum length 10';
      dispatch(setErrorMsg({addressError: msg}));
    }
  };
  const handleSaveAndNext = () => {
    handleSave();
    if (isValidFirstName() && isValidLastName() && isValidAddress()) {
      navigation.navigate('Form-3');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Form 2</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={handleFirstName}
            style={styles.input}
          />
        </View>
        {errorMsg.firstNameError && (
          <Text style={styles.errorLable}>{errorMsg.firstNameError}</Text>
        )}
      </View>
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Last Name (Optional)"
            value={lastName}
            onChangeText={handleLastName}
            style={styles.input}
          />
        </View>
        {errorMsg.lastNameError && (
          <Text style={styles.errorLable}>{errorMsg.lastNameError}</Text>
        )}
      </View>
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={handleAddress}
            style={styles.input}
          />
        </View>
        {errorMsg.addressError && (
          <Text style={styles.errorLable}>{errorMsg.addressError}</Text>
        )}
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={navigateBack}>
          <Button title="Back" />
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

export default FormScreen2;

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
