import 'react-native-gesture-handler';
import React from 'react';
import HomePage from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AffecteesPosts from './components/AffecteesPosts';
import SplachScreen from './components/SplachScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import Currentlocation from './components/customcomponent/Currentloaction';
import Donations from './components/Donations';
import ShowAffecteesPosts from './components/ShowAffecteesPosts';
import PriceJump from './components/PriceJump';
import ShowAlKhidmatDonationDetails from './components/customcomponent/ShowAlKhidmatDonation';
import ShowAlamgirDonationDetails from './components/customcomponent/ShowAlamgirDonationDetails';
import Baitulsukoon from './components/customcomponent/BaitulsukoonDonation'; 
import ChippaDonation from './components/customcomponent/ChippaDonation';
import DawateIslamiDonation from './components/customcomponent/DawateIslamiDonation';
import SaylaniDonation from './components/customcomponent/SyalaniDonations';
import EdhiDonation from './components/customcomponent/EdhiDonations';
import FRDPDonation from './components/customcomponent/FRDPdonations';
import Showimage from './components/customcomponent/Showimage';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplachScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Register" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Location" component={Currentlocation} />
        <Stack.Screen name="Posts" component={AffecteesPosts} />
        <Stack.Screen name="Donate" component={Donations} />
        <Stack.Screen name="ShowPosts" component={ShowAffecteesPosts} />
        <Stack.Screen name="PriceJump" component={PriceJump} />
        <Stack.Screen name="AlKhidmatDonationDetails" component={ShowAlKhidmatDonationDetails} />
        <Stack.Screen name="AlamgirDonationDetails" component={ShowAlamgirDonationDetails} />
        <Stack.Screen name="Baitulsukoon" component={Baitulsukoon} />
        <Stack.Screen name="ChippaDonation" component={ChippaDonation} />
        <Stack.Screen name="DawateIslamiDonation" component={DawateIslamiDonation} />
        <Stack.Screen name="SaylaniDonation" component={SaylaniDonation} />
        <Stack.Screen name="EdhiDonation" component={EdhiDonation} />
        <Stack.Screen name="FDRPDonation" component={FRDPDonation} />
        <Stack.Screen name="Showimage" component={Showimage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
