import {View, Text,Linking} from 'react-native';
import React from 'react';
import DonationDetails from './DonationDetails';


const FRDPDonation = () => {
  const handlePress = () => {
    const url = 'https://www.frdpinternational.org/donate-now/';
    Linking.openURL(url);
  };
  return (
    <View>
      <DonationDetails
        text_Acctitle={'NULL'}
        text_AccNo={'NULL'}
        text_IBAN={'NULL'}
        text_Bank={'NULL'}
        text_SwiftCode={'NULL'}
        onPress={()=>handlePress()}
      />
    </View>
  );
};

export default FRDPDonation;
