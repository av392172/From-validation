import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import Button from './Button';

const CustomModal = ({setModalVisible}: any) => {
  const {email, password, firstName, lastName, address, countryCode, phone} =
    useSelector((state: any) => state.user);
  return (
    <View style={styles.modalContainer}>
      <View>
        <Text style={styles.title}>Personal details</Text>
      </View>
      <View style={styles.dataWrapper}>
        <Text style={styles.headingLable}>Email</Text>
        <Text style={styles.detailLable}>{email}</Text>
      </View>
      <View>
        <Text style={styles.headingLable}>Password</Text>
        <Text style={styles.detailLable}>{password}</Text>
      </View>
      <View>
        <Text style={styles.headingLable}>First Name</Text>
        <Text style={styles.detailLable}>{firstName}</Text>
      </View>
      <View>
        <Text style={styles.headingLable}>Last Name</Text>
        <Text style={styles.detailLable}>{lastName}</Text>
      </View>
      <View>
        <Text style={styles.headingLable}>Address</Text>
        <Text style={styles.detailLable}>{address}</Text>
      </View>
      <View>
        <Text style={styles.headingLable}>Country Code</Text>
        <Text style={styles.detailLable}>{countryCode}</Text>
      </View>
      <View>
        <Text style={styles.headingLable}>Phone Number</Text>
        <Text style={styles.detailLable}>{phone}</Text>
      </View>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => setModalVisible(false)}>
        <Button title="Ok" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    width: '100%',
    height: '70%',
    zIndex: 99,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    display: 'flex',
    gap: 18,
    elevation: 1,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
  dataWrapper: {},
  headingLable: {
    paddingLeft: 10,
    color: 'black',
    fontWeight: '500',
    fontSize: 13,
  },
  detailLable: {
    paddingLeft: 10,
    fontSize: 11,
  },
  btnContainer: {
    marginTop: 10,
  },
});
