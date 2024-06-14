import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({onChangeText}) => {
  const onChangeInput = text => {
    onChangeText(text);
  };
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeInput}
        maxLength={30}
        autoCapitalize="none"
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#dbdbdb',
    borderRadius: 10,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
