import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import {React, useEffect, useState} from 'react';
import Logo from '../assets/images/LoginIcon.jpg';
import Custominput from './customcomponent/custominput';
import CustomButton from './customcomponent/customButton';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage  from '@react-native-async-storage/async-storage';

const isValidObjField = obj => {
  return Object.values(obj).every(value => value.trim());
};
const updateError = (error, setUpdater) => {
  setUpdater(error);
  setTimeout(() => {
    setUpdater('');
  }, 2500);
};
const isValidEmail = value => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  console.log(regx.test(value));
  return regx.test(value);
};

let token = '';
const Signup = ({navigation}) => {
  
  useEffect( () =>{
    getToken()
  }, [])
  const getToken = async () =>{
    token = await messaging().getToken();
  }

  const saveData = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
        email: username,
        password: password,
        confirmpassword: confirmpassword,
        token: token,
      })
      .then(() => {
        saveLocaldata()
        console.log('User added!');
      });
  };
const saveLocaldata = async() =>{
  await AsyncStorage.setItem('Name', name); 
  await AsyncStorage.setItem('Email', username);
}
  const [userInfo, setUserInfo] = useState({
    name: '',
    username: '',
    password: '',
    confirmpassword: '',
  });
  const {name, username, password, confirmpassword} = userInfo;
  const [error, setError] = useState('');
  const {height} = useWindowDimensions();

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    // if all of the fields have values
    if (!isValidObjField(userInfo))
      return updateError('Required all fields', setError);
    // name have 3 or more characters
    if (!name.trim() || name.length < 3)
      return updateError('Invalid name!', setError);
    // valid email
    if (!isValidEmail(username)) return updateError('Invalid email!', setError);
    // password have 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError('Password is less than 8 characters!', setError);
    // password and confirm password must be same
    if (password !== confirmpassword)
      return updateError('Password does not match!', setError);
    return true;
  };

  const submitForm = () => {
    if (isValidForm()) {
      navigation.navigate('Register');
      saveData();
    }
  };
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.uppercontainer}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.25}]}
            resizeMode="contain"></Image>
        </View>

        <View style={{marginTop: '5%'}}>
          <Text style={styles.Text}>SIGNUP</Text>
        </View>

        {error ? <Text style={styles.ErrorText}>{error}</Text> : null}

        <View style={styles.container}>
          <Text style={styles.BtnText}>Name</Text>
          <View style={styles.sectionStyle}>
            <FontAwesome5
              name="user-alt"
              size={30}
              color="#880808"
              style={styles.searchIcon}
            />
            <Custominput
              placeholder="Full name"
              value={name}
              onChangeText={value => handleOnChangeText(value, 'name')}
            />
          </View>

          <Text style={styles.BtnText}>Username</Text>
          <View style={styles.sectionStyle}>
            <MaterialCommunityIcon
              name="phone-message"
              size={32}
              color="#880808"
              style={styles.searchIcon}
            />
            <Custominput
              placeholder="Email Address "
              autoCapitalize="none"
              value={username}
              onChangeText={value => handleOnChangeText(value, 'username')}
            />
          </View>

          <Text style={styles.BtnText}>Password</Text>
          <View style={styles.sectionStyle}>
            <Foundation
              name="lock"
              size={37}
              color="#880808"
              style={styles.searchIcon}
            />
            <Custominput
              autoCapitalize="none"
              placeholder="Password"
              value={password}
              onChangeText={value => handleOnChangeText(value, 'password')}
              secureTextEntry={true}
            />
          </View>

          <Text style={styles.BtnText}>Confrim password</Text>
          <View style={styles.sectionStyle}>
            <Foundation
              name="lock"
              size={37}
              color="#880808"
              style={styles.searchIcon}
            />
            <Custominput
              autoCapitalize="none"
              placeholder="Confrim Password"
              value={confirmpassword}
              onChangeText={value =>
                handleOnChangeText(value, 'confirmpassword')
              }
              secureTextEntry={true}
            />
          </View>
        </View>

        {/* <CustomButton onPress={onForgotPassword} text="Forgot Password?" type='TERTIARY'/> */}

        <CustomButton
          // onPress={() => {
          //   navigation.navigate('Register');
          // }}
          onPress={submitForm}
          text="SIGNUP"
          container="BTN"
        />

        {/* <CustomButton onPress={onPressSignUP} text="Don't have an account? SIGNUP" type='TERTIARY' center='CENTER'/> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#EDEADE',
  },

  uppercontainer: {
    backgroundColor: '#880808',
    alignItems: 'center',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  logo: {
    height: '50%',
    maxWidth: 300,
    maxHeight: 300,
  },
  Text: {
    color: '#880808',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  ErrorText: {
    color: '#880808',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
  BtnText: {
    color: '#880808',
    marginTop: '1%',
    fontWeight: 'bold',
    paddingLeft: '4.1%',
    fontSize: 20,
  },

  container: {
    margin: 20,
  },
  searchIcon: {
    paddingLeft: '1.5%',
  },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEADE',
    //borderWidth: 0.5,
    borderBottomWidth: 1,
    borderColor: '#880808',
    height: 50,
    margin: 10,
  },
});

export default Signup;
