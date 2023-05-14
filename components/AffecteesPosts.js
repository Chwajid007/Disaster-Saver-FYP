import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  Image,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from './customcomponent/customButton';
import Currentlocation from './customcomponent/Currentloaction';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage, {firebase} from '@react-native-firebase/storage';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Linking} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { Platform} from 'react-native';
import { ToastAndroid } from 'react-native';




let token = '';
let name = '';
let username = '';

const AffecteesPosts = ({navigation}) => {

  useEffect(() => {
    getToken();
  }, []);
  const getToken = async () => {
    token = await messaging().getToken();
    name = await AsyncStorage.getItem('Name');
    username = await AsyncStorage.getItem('Email');
    console.log(name, username);
  };

  const {height} = useWindowDimensions();
  const [imageData, setImageData] = useState();
  const [galleryData, setGalleryData] = useState(null);
  const [caption, setcaption] = useState(null);

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 5,
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setImageData(result);
      console.log(result);
      console.log(Response);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryData(result);

    console.log(result);
  };

  //post data
  const uploadData = async () => {
    //for cameraimage
    const refrence = storage().ref(imageData.assets[0].fileName);
    const pathtoFile = imageData.assets[0].uri;

    //uploadfile
    await refrence.putFile(pathtoFile);

    const url = await storage()
      .ref(imageData.assets[0].fileName)
      .getDownloadURL();

    // for gallery image
    const refrence_gallery = storage().ref(galleryData.assets[0].fileName);
    const pathtoFile_gallery = galleryData.assets[0].uri;

    //uploadfile
    await refrence_gallery.putFile(pathtoFile_gallery);

    const url_gallery = await storage()
      .ref(galleryData.assets[0].fileName)
      .getDownloadURL();

    firestore()
      .collection('posts')
      .add({
        cameraimage: url,
        galleryimage: url_gallery,
        caption: caption,
        latitude: location.latitude,
        longitude: location.longitude,
        name: name,
        email: username,
      })
      .then(() => {
       // getAlltoken();
        console.log('post added!');
      });
  };





// location

const [location, setLocation] = useState({
  //latitude: 1,
   latitude: null,
   longitude:null,
  //  latitude: 31.600927238449867,
  // longitude: 73.0365842424535,
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
        ToastAndroid.show('Location permission granted', ToastAndroid.SHORT);
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
        ToastAndroid.show('Location permission denied', ToastAndroid.SHORT);
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
      ToastAndroid.show('position', ToastAndroid.SHORT);
      console.log(position.coords.latitude," ",position.coords.longitude);
      // ToastAndroid.show(position, ToastAndroid.LONG);
      setLocation(
        {
          latitude: position.coords.latitude,
          
          longitude: position.coords.longitude,
        }
        // {
        //   latitude: position.coords.latitude,
        //   longitude: position.coords.longitude,
        // }
      );
    },
    error => console.log(error),
    {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
  );
};

const shareLocation = () => {
  const url = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
  Linking.openURL(url);
};









  // firestore()
  //   .collection('posts')
  //   .get()
  //   .then(querySnapshot => {
  //     //console.log('Total posts: ', querySnapshot.size);

  //     querySnapshot.forEach(documentSnapshot => {
  //       // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //     });
  //   });

  // const getAlltoken = () => {
  //   let tempToken = [];
  //   firestore()
  //     .collection('Tokens')
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(documentSnapshot => {
  //         sendNotifications(documentSnapshot.data().token);
  //       });
  //       sendNotifications(tempToken);
  //     });
  // };

  // const sendNotifications = async token => {
  //   var axios = require('axios');
  //   var data = JSON.stringify({
  //     data: {},
  //     notification: {
  //       body: 'click to open and check Post',
  //       title: 'New Post Added',
  //     },
  //     to: token,
  //   });
  //   var config = {
  //     method: 'post',
  //     url: 'https://fcm.googleapis.com/fcm/send',
  //     headers: {
  //       Authorization: 'key=AAAATmRzWHE:APA91bEt4UGqS6PnxI9QjxDHLtGym6mjhFZRx1KtqbW9dibJe3PH-OREglD0dv-6bOEDh0GFbHf8IoDhMuI4CxCCyhSOotnNDFVzp_gYW2erAfDJFtCD2wtVxfYWcC-r1YI1Ff5iHTJq',
  //       'Content-Type': 'application/json',
  //     },
  //     data: data,
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  //   var imgArray = [];
  //   const [filePath, setFilePath] = useState([]);
  //   const [filePathArray, setFilePathArray] = useState([]);
  // const chooseFile = (type) => {
  // let option =
  // {
  //       mediaType: type,
  //       maxWidth: 300,
  //       maxHeight: 550,
  //       quality: 1,
  //       selectionLimit: 5
  // };
  //     launchImageLibrary(option, (response) => {

  //      response.assets.forEach(function (item, index) {

  //         console.log(item);
  //         if(item[index] !=null)
  //         {
  //           imgArray.push(item[0].uri);
  //           setFilePathArray(filePathArray => [...filePathArray, imgArray]);
  //         }

  //       });
  //       ///Loop through responses
  //       setFilePath(response.assets[0].uri);

  //     });

  //   };
  // const [images, setImages] = useState([]);

  //   const selectImages = () => {
  //     const option = {
  //       title: 'Select Avatar',
  //       storageOptions: {
  //         skipBackup: true,
  //         path: 'images',
  //       },
  //       multiple: true, // Enable multiple picker
  //     };

  //     ImagePicker.launchImageLibrary(option, (response) => {
  //       if (response.didCancel) {
  //         console.log('User cancelled image picker');
  //       } else if (response.error) {
  //         console.log('ImagePicker Error: ', response.error);
  //       } else if (response.customButton) {
  //         console.log('User tapped custom button: ', response.customButton);
  //       } else {
  //         setImages([...images, ...response.map((image) => image.uri)]);
  //       }
  //     });
  //   };

  return (
    <ScrollView style={{backgroundColor: '#EDEADE'}}>
      <SafeAreaView style={styles.root}>
        <View style={styles.upper_part}>
          <TouchableOpacity
            activeOpacity={0.4}
            underlayColor="#000"
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <AntDesign name="close" size={37} color="#880808" />
          </TouchableOpacity>

          {/* <CustomButton
            text="Upload"
            posts="POSTS"
            style={{
              color:
                imageData !== null && galleryData !== null ? '#880808' : '#000',
            }}
            onPress={() => {
              if (imageData !== null && galleryData !== null) {
                uploadData();
              }
            }}
          /> */}

          <TouchableOpacity
            activeOpacity={0.4}
            underlayColor="#000"
            onPress={() => {
              if ((imageData && imageData && imageData.assets && imageData.assets.length > 0 !== null) && galleryData && galleryData.assets && galleryData.assets.length > 0 !== null) {
                alert('Image from camera and gallery upload sucessfully')
                navigation.navigate('Home');
                uploadData();
              } else {
                alert('Please select an image from camera and gallery');
              }
            }}>
            <Text
              style={{
                backgroundColor:
                  ((imageData && imageData && imageData.assets && imageData.assets.length > 0 !== null) && (galleryData && galleryData.assets && galleryData.assets.length > 0 !== null))
                    ? '#880808'
                    : '#ae655a',
                width: '107%',
                marginBottom: '5%',
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                height: 51,
                padding: 10,
                paddingLeft: 15,
                borderRadius: 20,
              }}>
              Upload
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TextInput
            multiline={true}
            value={caption}
            onChangeText={txt => {
              setcaption(txt);
            }}
            //maxLength={12}
            placeholder="What's happening?"
            style={styles.textstyle}
          />
        </View>


        <View><Text style={{fontSize:23 ,fontWeight:"bold" ,margin:7, color:"#880808"}}>Latitude = {location.latitude}</Text>
        <Text style={{fontSize:23 ,fontWeight:"bold" ,margin:7, color:"#880808"}}>Longitude = {location.longitude}</Text></View>
        <View>


         {imageData!==null ?  (imageData && imageData.assets && imageData.assets.length > 0 && (
            <Image
              style={[styles.imageSize, {height: height * 0.25}, {resizeMode:"contain"}]}
              source={{uri: imageData.assets[0].uri}}
            />)
          ): null} 
      
          {galleryData !==null ?( galleryData && galleryData.assets && galleryData.assets.length > 0 && (
            <Image
              style={[styles.imageSize, {height: height * 0.25}, {resizeMode:"contain"}]}
              source={{uri: galleryData.assets[0].uri}}
            />)
          ):null}

          {/* {images.map((image) => (
        <Image key={image} source={{ uri: image }} style={[styles.imageSize]} />
      ))} */}
        </View>
        <View style={styles.picArt}>
          <TouchableOpacity
            activeOpacity={0.4}
            underlayColor="#000"
            onPress={openCamera}>
            <AntDesign
              name="camerao"
              size={40}
              color="#880808"
              style={{paddingLeft: '3%', paddingTop: '2.5%'}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.4}
            underlayColor="#000"
            onPress={openGallery}>
            <Ionicons
              name="images-outline"
              size={40}
              color="#880808"
              style={{paddingLeft: '5%', paddingTop: '2.5%'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.4}
            underlayColor="#000"
            onPress={() => {
              // navigation.navigate('Location');
              shareLocation()
            }}>
            <Ionicons
              name="md-location-outline"
              size={40}
              color="#880808"
              style={{paddingLeft: '15%', paddingTop: '2.5%'}}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    //backgroundColor:"#EDEADE",
    //alignItems:"flex-start",
  },
  upper_part: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '3%',
  },
  textstyle: {
    fontSize: 25,
    margin: 15,
    color:"#880808"
  },
  imagealt: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent:"space-evenly"
  },
  picArt: {
    flexDirection: 'row',
    marginTop: '2%',
    borderTopWidth: 0.7,
    borderTopColor: '#880808',
    justifyContent: 'flex-start',
  },
  imageSize: {
    margin: 20,
    borderRadius: 15,
  },
});
export default AffecteesPosts;
