import {View, Text, FlatList,Image,ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const ShowAffecteesPosts = () => {
  const [post , setpost] = useState([])
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    let tempData =[]
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
  return (

    <View style={{flex:1}}>
      <FlatList
      data={post}
      renderItem={({item,index})=>{
        return(
          <ScrollView>
          <View style={{flex:1, width:"90%", height:200, alignSelf:"center", margin:20 }}>
            <Text style={{color:"#000", fontSize: 20,
                fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{color:"#000", fontSize: 20,
                fontWeight: 'bold'}}> {item.caption}</Text>
                <View style={{flex:1, flexDirection:"row"}}>
            <Image source={{uri: item.galleryimage}} style={{width:"50%", height:"100%", borderRadius:20,marginEnd:20 , justifyContent:"space-between"}}></Image>
            <Image source={{uri: item.cameraimage}} style={{width:"50%", height:"100%", borderRadius:20, marginLeft:-2 }}></Image>
            </View>
          </View>
          </ScrollView>
        )
      }}

      />

    </View>

  );
};

export default ShowAffecteesPosts;
