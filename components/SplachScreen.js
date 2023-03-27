
import React from 'react'
import { ImageBackground } from 'react-native';



const SplachScreen = ({navigation}) => {
    setTimeout(() =>{
        navigation.replace('Home');
    },3000);
  return (
    <ImageBackground style={{flex:1}} source={require('../assets/images/Disasterpic.jpg')}>
      </ImageBackground>
  );
}


export default SplachScreen