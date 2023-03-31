import { View, Text, FlatList, Image, ScrollView, StyleSheet, Dimensions,TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const { width, height } = Dimensions.get('window');

const ShowAffecteesPosts = ({ navigation }) => {
  const [post, setpost] = useState([])
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    let tempData = []
    firestore()
      .collection('posts')
      .get()
      .then(querySnapshot => {
        console.log('Total posts: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          tempData.push(documentSnapshot.data())
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
        });
        setpost(tempData)
      });
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const viewImage = (uri) => {
    navigation.navigate('Showimage', { uri: uri });
    console.log(uri)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={post}
        renderItem={({ item, index }) => {
          return (
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View style={styles.postContainer}>
                <Text style={styles.postTitle}>{item.name}</Text>
                <Text style={styles.postCaption}>{item.caption}</Text>
                <Text style={styles.postlatlong}>Latitude = {item.latitude}</Text>
                <Text style={styles.postlatlong}>Longitude = {item.longitude}</Text>
                <View style={styles.imageContainer}>
                  {imageLoaded &&
                    <TouchableWithoutFeedback onPress={() => viewImage(item.galleryimage)}>
                      <Image source={{ uri: item.galleryimage }} style={styles.image} onLoad={() => setImageLoaded(true)}></Image>
                    </TouchableWithoutFeedback>
                  }
                  {!imageLoaded &&
                    <Image source={{ uri: item.galleryimage }} style={styles.image} onLoad={() => setImageLoaded(true)}></Image>
                  }
                  {imageLoaded &&
                    <TouchableWithoutFeedback onPress={() => viewImage(item.cameraimage)}>
                      <Image source={{ uri: item.cameraimage }} style={styles.image} onLoad={() => setImageLoaded(true)}></Image>
                    </TouchableWithoutFeedback>
                  }
                  {!imageLoaded &&
                    <Image source={{ uri: item.cameraimage }} style={styles.image} onLoad={() => setImageLoaded(true)}></Image>
                  }
                </View>
              </View>
            </ScrollView>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  postContainer: {
    width: '100%',
    backgroundColor: '#EDEADE',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postCaption: {
    fontSize: 16,
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: height * 0.4,
  },
  image: {
    flex: 1,
    height: '100%',
    borderRadius: 10,
    marginHorizontal: 5,
    resizeMode:"contain"
  },
  postlatlong: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ShowAffecteesPosts;
