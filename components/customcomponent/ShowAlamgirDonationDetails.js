import {View, Text,Linking} from 'react-native';
import React from 'react';
import DonationDetails from './DonationDetails';


const ShowAlamgirDonationDetails = () => {
  const handlePress = () => {
    const url = 'https://www.alamgirwelfaretrust.com.pk/alamgir2013/eds.asp';
    Linking.openURL(url);
  };
  return (
    <View>
      <DonationDetails
        text_Acctitle={'Alamgir Welfare Trust International'}
        text_AccNo={'0104-0100198067'}
        text_IBAN={'PK70DUIB0000000370478001'}
        text_Bank={'Meezan Bank'}
        text_SwiftCode={'MEZN PK KA'}
        onPress={()=>handlePress()}
      />
    </View>
  );
};

export default ShowAlamgirDonationDetails;
