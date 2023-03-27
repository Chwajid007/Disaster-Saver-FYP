import {View, Text,Linking} from 'react-native';
import React from 'react';
import DonationDetails from './DonationDetails';


const ChippaDonation = () => {
  const handlePress = () => {
    const url = 'https://www.chhipa.org/donate/';
    Linking.openURL(url);
  };
  return (
    <View>
      <DonationDetails
        text_Acctitle={'Chhipa Welfare Association'}
        text_AccNo={'0103970978'}
        text_IBAN={'PK58MEZN0001480103970978'}
        text_Bank={'MEEZAN BANK LTD'}
        text_SwiftCode={'MEZNPKKA'}
        onPress={()=>handlePress()}
      />
    </View>
  );
};

export default ChippaDonation;
