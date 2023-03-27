import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  // Linking,
  // Vibration,
} from 'react-native';

const HomePage = ({navigation}) => {
  const {height} = useWindowDimensions();
  return (
    <View
      style={{
        backgroundColor: '#EDEADE',
        height,
      }}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.Dsaver}>
          <LinearGradient colors={['#FF0000', '#880808']} style={styles.Dsaver}>
            <Text style={styles.Text}>{`\n\n  Welcome `} </Text>
            <Text style={{color: '#000', fontSize: 35, fontWeight: 'bold'}}>
              {' '}
              Disaster{' '}
              <Text
                style={{color: '#FF0000', fontSize: 35, fontWeight: 'bold'}}>
                Saver{`\n`}
              </Text>{' '}
            </Text>
          </LinearGradient>
        </View>
        {/* <View style={{flex:0.2}}> 
    </View> */}
        <View style={styles.Content}>
          <TouchableOpacity
            activeOpacity={0.4}
            underlayColor="#000"
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <View style={styles.btn1}>
              <Entypo name="new-message" size={50} color="#ffff" />
              <Text style={styles.Textbtn}>Create Posts</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.4}
            underlayColor="#000"
            onPress={() => {
              navigation.navigate('ShowPosts');
            }}>
            <View style={styles.btn1}>
              <Icon name="ios-mail-unread-outline" size={55} color="#ffff" />
              <Text style={styles.Textbtn}>Affectees Posts</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/*  */}
        <View style={styles.Content1}>
          <TouchableOpacity
            activeOpacity={0.4}
            underlayColor="#000"
            onPress={() => {
              navigation.navigate('Donate');
            }}>
            <View style={styles.btn1}>
              <MaterialCommunityIcons name="charity" size={52} color="#ffff" />
              <Text style={styles.Textbtn}>Donations</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.4}
            underlayColor="#fff"
            onPress={() => {
              navigation.navigate('PriceJump');
            }}>
            <View style={styles.btn1}>
              <FontAwesome5 name="chart-line" size={52} color="#ffff" />
              <Text style={styles.Textbtn}>Price Jump</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* <View style={{flex:0.23}}> 
    </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#EDEADE',
  },
  Dsaver: {
    //flex:0.1,
    backgroundColor: '#880808',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },

  Text: {
    color: 'white',
    //paddingVertical:65,
    fontStyle: 'bold',
    fontSize: 27,
  },

  Content: {
    flex: 1.2,
    flexDirection: 'row',
    backgroundColor: '#EDEADE',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 35,
  },

  Content1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EDEADE',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 39,
  },

  Textbtn: {
    color: 'white',
    fontStyle: 'bold',
    fontSize: 17,
    fontFamily: 'Cochin',
  },

  btn1: {
    backgroundColor: '#880808',
    fontFamily: 'FiraSans-Bold',
    height: 175,
    width: 160,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    //     shadowColor: "#000",
    // shadowOffset: {
    // 	width: 0,
    // 	height: 5,
    // },
    // shadowOpacity: 0.36,
    // shadowRadius: 6.68,

    //  elevation: 18,
  },
});

export default HomePage;
