import React from 'react';
import { Button, View, Linking, StyleSheet } from 'react-native';

export const handleButtonPress = () => {
  try {
    Linking.openURL('myjavaapp://com.alexkang.bluechat');
  } catch (error) {
    console.log('Error launching Java app:', error);
  }
};
const BlueChatApp = () => {
  return (
    <View style={styles.container}>
      <Button title="Launch Java app" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BlueChatApp;

