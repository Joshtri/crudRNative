import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

const InputComp = ({
  label,
  placeholder,
  keyboardType,
  isTextArea,
  onChangeText,
  namaState,
  value
}) => {
  if (isTextArea) {
    return (
      <>
        <Text style={styles.label}>{label} :</Text>
        <TextInput
          placeholder={placeholder}
          multiline={true}
          numberOfLines={4}
          style={styles.textInputArea}
          keyboardType={keyboardType}
          value={value}
          onChangeText={(text) => onChangeText(namaState, text)}
        />
      </>
    );
  }

  return (
    <>
      <Text style={styles.label}>{label} :</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => onChangeText(namaState, text)}
      />
    </>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'medium',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
