import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Linking} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid, Platform} from 'react-native';
import { ToastAndroid } from 'react-native';
import AffecteesPosts from '../AffecteesPosts';

const Currentlocation = () => {
  const [location, setLocation] = useState({
    //latitude: 1,
     latitude: 31.600927238449867,
    longitude: 73.0365842424535,
  });

  useEffect(() => {
    requestLocationPermission();
  }, []);

  async function requestLocationPermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          ToastAndroid.show('Location permission granted', ToastAndroid.LONG);
          getOneTimeLocation();
          // if (navigator.geolocation) {
          // Geolocation.getCurrentPosition(
          //   position => {
          //     console.log('Current position: ', position);
          //   },
          //   error => {
          //     console.warn(error.code, error.message);
          //   },
          //   {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          // );
          // } else {
          //   console.log(
          //     'Geolocation is not supported by this browser or device.',
          //   );
          // }
        } else {
          console.log('Location permission denied');
          ToastAndroid.show('Location permission denied', ToastAndroid.LONG);
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }
  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Location Permission',
  //           message: 'This app needs access to your location',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log('Location permission granted');
  //         getOneTimeLocation();
  //       } else {
  //         console.log('Location permission denied');
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };
  // }, []);

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(

      (position) => {
        ToastAndroid.show('position', ToastAndroid.LONG);
        console.log(position.coords.latitude," ",position.coords.longitude);
        // ToastAndroid.show(position, ToastAndroid.LONG);
        setLocation(
          {
            "latitude": position.coords.latitude,
            
            "longitude": position.coords.longitude,
          }
          // {
          //   latitude: position.coords.latitude,
          //   longitude: position.coords.longitude,
          // }
        );
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const shareLocation = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <AffecteesPosts latitude={location.latitude} longitude={location.longitude}/>
      <Button title="Share Location" onPress={shareLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Currentlocation;
