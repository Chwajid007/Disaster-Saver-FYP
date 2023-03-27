import {View, Text,Linking} from 'react-native';
import React from 'react';
import DonationDetails from './DonationDetails';


const EdhiDonation = () => {
  const handlePress = () => {
    const url = 'https://edhi.org/donate-us/';
    Linking.openURL(url);
  };
  return (
    <View>
      <DonationDetails
        text_Acctitle={'Abdul Sattar Edhi Foundation'}
        text_AccNo={'1271001064790004'}
        text_IBAN={'PK72MCIB1271001064790004'}
        text_Bank={'MCB Islamic Bank Ltd'}
        text_SwiftCode={'MCIBPKKI'}
        onPress={()=>handlePress()}
      />
    </View>
  );
};

export default EdhiDonation;
