import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const custominput = props => {
  const {value, setValue, placeholder, secureTextEntry, right} = props;

  return (
    <View style={styles.container}>
      <TextInput {...props} placeholderTextColor='#880808' placeholder={placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
  },

  input: {
    paddingLeft: 2,
    color:"#880808"
  },
});

export default custominput;
