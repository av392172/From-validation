import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import Button from '../components/Button';
import CustomModal from '../components/CustomModal';
import {useDispatch, useSelector} from 'react-redux';
import {setCountryCode, setErrorMsg, setPhone} from '../redux/userSlice';

const FormScreen3 = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {phone, countryCode, errorMsg} = useSelector(
    (state: any) => state.user,
  );
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handlePhone = (text: any) => {
    dispatch(setPhone(text));
  };
  const navigateBack = () => {
    navigation.goBack();
  };
  const isValidPhoneNumber = () => {
    const phoneRegex = /^\d{10}$/;
    if (phoneRegex.test(phone)) {
      return true;
    } else {
      return false;
    }
  };
  const handleSave = () => {
    if (isValidPhoneNumber()) {
      dispatch(setErrorMsg({phoneError: ''}));
    } else {
      const msg = 'Must be a 10 digit numeric phone number';
      dispatch(setErrorMsg({phoneError: msg}));
    }
    if (toggleCheckBox) {
      dispatch(setErrorMsg({checkboxError: ''}));
    } else {
      dispatch(setErrorMsg({checkboxError: 'Checkbox not selected'}));
    }

    if (isValidPhoneNumber() && toggleCheckBox) {
      setModalVisible(true);
    }
  };

  return (
    <View
      style={[styles.container, modalVisible && {backgroundColor: '#D3D3D3'}]}>
      <View>
        <Text style={styles.heading}>Form 3</Text>
      </View>

      <View style={styles.inputContainer}>
        <Picker
          selectedValue={countryCode}
          onValueChange={itemValue => dispatch(setCountryCode(itemValue))}>
          <Picker.Item label="India (+91)" value="+91" />
          <Picker.Item label="America (+1)" value="+1" />
        </Picker>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={handlePhone}
            style={styles.input}
          />
        </View>
        {errorMsg.phoneError && (
          <Text style={styles.errorLable}>{errorMsg.phoneError}</Text>
        )}
      </View>
      <View style={styles.wrapper}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => {
              setToggleCheckBox(newValue);
            }}
          />
          <Text style={styles.acceptLable}>
            {'I accept the '}
            <Text style={styles.termsLable}>terms and conditions</Text>
          </Text>
        </View>
        {errorMsg.checkboxError && (
          <Text style={styles.errorLable}>{errorMsg.checkboxError}</Text>
        )}
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={navigateBack}>
          <Button title="Back" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleSave}>
          <Button title="Save" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} disabled={true}>
          <Button title="Save and Next" disabled={true} />
        </TouchableOpacity>
      </View>
      {modalVisible && <CustomModal setModalVisible={setModalVisible} />}
    </View>
  );
};

export default FormScreen3;

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
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: '#D3D3D3',
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  input: {
    paddingHorizontal: 10,
  },
  termsLable: {
    color: '#3897f0',
    textDecorationLine: 'underline',
  },
  acceptLable: {
    color: 'black',
  },
  wrapper: {
    width: '100%',
  },
  errorLable: {
    color: 'red',
    fontSize: 11,
  },
  modalContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    borderWidth: 1,
    backgroundColor: '#d3d3d3',
    zIndex: 99,
  },
  btn: {
    width: '100%',
  },
});
