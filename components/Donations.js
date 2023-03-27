import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
//import DonationDetails from './customcomponent/DonationDetails';

// const donationdetails =()=>{
//   return(
//   <DonationDetails
//   text_Acctitle={'Al-Khidmat Foundation Pakistan'}
//   text_AccNo={"02140100861151"}
//   text_IBAN={"PK35 MEZN00 02140100861151"}
//   text_Bank={"Meezan Bank"}
//   text_SwiftCode={"MEZNPKKA"}
//   />
//   );
// }

const Donations = ({navigation}) => {
  const {height} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.uppercontainer}>
          <Image
            source={require('../assets/images/DonationsPost.jpg')}
            style={[styles.logo, {height: height * 0.25}]}
            resizeMode="contain"></Image>
          <Text style={styles.Textalt}>
            Donations{' '}
            <Text style={styles.textdesing}>{`\nEvery rupee counts.`}</Text>
          </Text>
        </View>

        <View style={{marginTop: '15%', flex: 1}}>
          <TouchableOpacity
            activeOpacity={0.5}
            underlayColor="#000"
            onPress={() => {
              navigation.navigate('AlKhidmatDonationDetails');
            }}>
            <View style={styles.ngoalt}>
              <Image
                source={require('../assets/images/Alkhidmat.jpg')}
                style={[styles.orgstyle, {height: height * 0.07}]}></Image>

              <Text style={styles.ngotext}> Al-khidmat Foundation</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            underlayColor="#000"
            onPress={() => {
              navigation.navigate('AlamgirDonationDetails');
            }}>
            <View style={[styles.ngoalt]}>
              <Image
                source={require('../assets/images/AlamgirTrust.jpg')}
                style={[styles.orgstyle, {height: height * 0.07}]}></Image>

              <Text style={styles.ngotext}> Alamgir Welfare Trust</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            underlayColor="#000"
            onPress={() => {
              navigation.navigate('Baitulsukoon');
            }}>
            <View style={[styles.ngoalt]}>
              <Image
                source={require('../assets/images/Bait-ul-sakoon.jpg')}
                style={[styles.orgstyle, {height: height * 0.07}]}></Image>

              <Text style={styles.ngotext}> Bait-ul-sakoon</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            underlayColor="#000"
            onPress={() => {
              navigation.navigate('ChippaDonation');
            }}>
            <View style={[styles.ngoalt]}>
              <Image
                source={require('../assets/images/Chhipa.jpg')}
                style={[styles.orgstyle, {height: height * 0.07}]}></Image>

              <Text style={styles.ngotext}> Chhipa Foundation</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            underlayColor="#880808"
            onPress={() => {
              navigation.navigate('DawateIslamiDonation');
            }}>
            <View style={[styles.ngoalt]}>
              <Image
                source={require('../assets/images/dawat-e-islami.jpg')}
                style={[styles.orgstyle, {height: height * 0.07}]}></Image>

              <Text style={styles.ngotext}> Dawat-e-Islami</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} underlayColor="#000"
          onPress={() => {
            navigation.navigate('EdhiDonation');
          }}>
            <View style={[styles.ngoalt]}>
              <Image
                source={require('../assets/images/EdhiFoundation.jpg')}
                style={[styles.orgstyle, {height: height * 0.07}]}></Image>

              <Text style={styles.ngotext}> Edhi Foundation</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} underlayColor="#000">
            <View style={[styles.ngoalt]}>
              <Image
                source={require('../assets/images/fast-rural-developmnt.jpg')}
                style={[styles.orgstyle, {height: height * 0.079}]}></Image>

              <Text style={styles.ngotext}> FRDP</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} underlayColor="#000">
            <View style={[styles.ngoalt]}>
              <Image
                source={require('../assets/images/JDC.jpg')}
                style={[styles.orgstyle, {height: height * 0.07}]}></Image>

              <Text style={styles.ngotext}> JDC</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} underlayColor="#000">
            <View style={[styles.ngoalt]}>
              <Image
                source={require('../assets/images/PMfund.jpg')}
                style={[styles.orgstyle, {height: height * 0.07}]}></Image>

              <Text style={styles.ngotext}> PM Fund Relief Fund 20222</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            underlayColor="#000"
            onPress={() => {
              navigation.navigate('SaylaniDonation');
            }}>
            <View style={[styles.ngoalt]}>
              <Image
                source={require('../assets/images/Saylani.jpg')}
                style={[styles.orgstyle, {height: height * 0.07}]}></Image>

              <Text style={styles.ngotext}> Saylani Donation</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} underlayColor="#000">
            <View style={[styles.ngoalt]}>
              <Image
                source={require('../assets/images/SKMCH.jpg')}
                style={[styles.orgstyle, {height: height * 0.07}]}></Image>

              <Text style={styles.ngotext}> SKMCH</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  logo: {
    height: '30%',
    maxWidth: 200,
    maxHeight: 200,
  },
  Textalt: {
    color: '#ffff',
    paddingRight: 15,
    fontSize: 40,
    fontWeight: 'bold',
  },
  textdesing: {
    color: '#ffff',
    fontSize: 20,
  },
  ngoalt: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingTop: 17,
    paddingBottom: 17,
  },
  orgstyle: {
    maxWidth: 60,
    //maxHeight: 100,
    //borderRadius:50,
    marginLeft: 15,
  },
  ngotext: {
    fontSize: 20,
    marginLeft: 20,
    color: '#000',
  },
});

export default Donations;
