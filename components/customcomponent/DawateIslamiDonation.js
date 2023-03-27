import {View, Text,Linking} from 'react-native';
import React from 'react';
import DonationDetails from './DonationDetails';


const DawateIslamiDonation = () => {
  const handlePress = () => {
    const url = 'https://www.dawateislami.net/onlinedonation/';
    Linking.openURL(url);
  };
  return (
    <View>
      <DonationDetails
        text_Acctitle={'DAWAT-E-ISLAMI TRUST'}
        text_AccNo={'0859491901004196'}
        text_IBAN={'PK92 MUCB 0859 4919 0100 4196'}
        text_Bank={'MEEZAN BANK LTD'}
        text_SwiftCode={'MEZNPKKA'}
        onPress={()=>handlePress()}
      />
    </View>
  );
};

export default DawateIslamiDonation;
