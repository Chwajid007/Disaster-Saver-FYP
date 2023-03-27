import {View, Text,Linking} from 'react-native';
import React from 'react';
import DonationDetails from './DonationDetails';


const ShowAlKhidmatDonationDetails = () => {
  const handlePress = () => {
    const url = 'https://alkhidmat.org/akf-donations.php';
    Linking.openURL(url);
  };
  return (
    <View>
      <DonationDetails
        text_Acctitle={'Al-Khidmat Foundation Pakistan'}
        text_AccNo={'02140100861151'}
        text_IBAN={'PK35 MEZN00 02140100861151'}
        text_Bank={'Meezan Bank'}
        text_SwiftCode={'MEZNPKKA'}
        onPress={()=>handlePress()}
      />
    </View>
  );
};

export default ShowAlKhidmatDonationDetails;
