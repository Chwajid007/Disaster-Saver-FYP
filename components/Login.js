import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import {React, useState} from 'react';
import Logo from '../assets/images/LoginIcon.jpg';
import Custominput from './customcomponent/custominput';
import CustomButton from './customcomponent/customButton';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import firestore from '@react-native-firebase/firestore';

const Login = ({navigation}) => {
  const saveData = () => {
    firestore()
      .collection('Users')
      .where('email', '==', username)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.docs);

        if (querySnapshot.docs.length > 0) {
          if (
            querySnapshot.docs[0]._data.email === username &&
            querySnapshot.docs[0]._data.password === password
          ) {
            navigation.navigate('Posts');
          } else {
            alert('Invalid Email and Password');
          }
          console.log(
            (querySnapshot.docs[0]._data.email ===
              username + ' ' + querySnapshot.docs[0]._data.password) ===
              password,
          );
        } else {
          alert('Account not found');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onPressLogIn = () => {
    saveData();
  };

  const onForgotPassword = () => {
    console.warn('Forgot Password');
  };

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
    return regx.test(value);
  };

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });
  const {username, password} = userInfo;
  const [error, setError] = useState('');

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };
  const isValidForm = () => {
    // if all of the fields have values
    if (!isValidObjField(userInfo))
      return updateError('Required all fields', setError);
    // valid email
    if (!isValidEmail(username)) return updateError('Invalid email!', setError);
    // password have 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError('Password is less than 8 characters!', setError);

    return true;
  };
  const submitForm = () => {
    if (isValidForm()) {
      onPressLogIn();
    }
  };
  const {height} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.uppercontainer}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"></Image>
        </View>

        <View>
          <Text style={styles.Text}>{`\n`}LOGIN</Text>
        </View>

        {error ? <Text style={styles.ErrorText}>{error}</Text> : null}
        <View style={styles.container}>
          <Text style={styles.BtnText}>Username</Text>
          <View style={styles.sectionStyle}>
            <FontAwesome5
              name="user-alt"
              size={30}
              color="#880808"
              style={styles.searchIcon}
            />
            <Custominput
              placeholder="Email Address"
              value={username}
              onChangeText={value => handleOnChangeText(value, 'username')}
              autoCapitalize="none"
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
              placeholder="Password"
              value={password}
              onChangeText={value => handleOnChangeText(value, 'password')}
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
        </View>

        <CustomButton
          onPress={onForgotPassword}
          text="Forgot Password?"
          container="BTN"
          type="TERTIARY"
        />

        <CustomButton onPress={submitForm} text="LOGIN" container="BTN" />

        <CustomButton
          onPress={() => {
            navigation.navigate('Signup');
          }}
          text="Don't have an account? SIGNUP"
          type="TERTIARY"
          center="CENTER"
        />
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
    marginTop: 15,
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

export default Login;
