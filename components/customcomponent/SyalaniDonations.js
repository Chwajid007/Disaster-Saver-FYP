import {View, Text,Linking} from 'react-native';
import React from 'react';
import DonationDetails from './DonationDetails';


const SaylaniDonation = () => {
  const handlePress = () => {
    const url = 'https://saylaniwelfare.com/en/donate';
    Linking.openURL(url);
  };
  return (
    <View>
      <DonationDetails
        text_Acctitle={'Saylani Welfare International Trust - Wajiba'}
        text_AccNo={'1321000189660001'}
        text_IBAN={'PK29MCIB1321000189660001'}
        text_Bank={'MEEZAN BANK LTD'}
        text_SwiftCode={'MCIBPKKI'}
        onPress={()=>handlePress()}
      />
    </View>
  );
};

export default SaylaniDonation;
