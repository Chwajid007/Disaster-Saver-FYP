import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Showimage = ({ route }) => {
  const { uri } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri }} resizeMode="contain" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    margin:"5%",
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Showimage;
