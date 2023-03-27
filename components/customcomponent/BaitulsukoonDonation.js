import {View, Text,Linking} from 'react-native';
import React from 'react';
import DonationDetails from './DonationDetails';


const Baitulsukoon = () => {
  const handlePress = () => {
    const url = 'https://baitulsukoon.org/donate/';
    Linking.openURL(url);
  };
  return (
    <View>
      <DonationDetails
        text_Acctitle={'Bait ul Sukoon Trust'}
        text_AccNo={'1007-0071-003235-01-0'}
        text_IBAN={'PK35 BAHL 1007 0071 0032 3501'}
        text_Bank={'Bank Al Habib Ltd'}
        text_SwiftCode={'BAHLPKKA'}
        onPress={()=>handlePress()}
      />
    </View>
  );
};

export default Baitulsukoon;
