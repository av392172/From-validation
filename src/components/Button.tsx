import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({navigate, title, disabled, handleSave}: any) => {
  const handleTouch = () => {
    navigate && navigate();
    handleSave && handleSave();
  };

  return (
    <View
      style={[
        styles.container,
        disabled ? {backgroundColor: '#808080'} : {backgroundColor: '#3897f0'},
      ]}
      // onPress={handleTouch}
      // disabled={disabled}
    >
      <Text style={styles.lable}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#3897f0',
    paddingVertical: 2,
    paddingHorizontal: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#3897f0',
    borderRadius: 5,
  },
  lable: {
    color: '#fff',
    paddingVertical: 7,
  },
});
