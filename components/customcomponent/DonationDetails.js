import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const DonationDetails = ({
  onPress,
  text_Acctitle,
  text_AccNo,
  text_IBAN,
  text_Bank,
  text_SwiftCode,
}) => {
  const { height } = useWindowDimensions();
  return (
    <ScrollView style={{backgroundColor: '#EDEADE',height}}>
       {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
        <Text style={styles.ngotext}> Account Details</Text>
        </View>
      <View style={styles.Container}>
        <Text style={styles.Text_alt}>
          Account Tittle: <Text style={{fontSize: 20}}>{text_Acctitle}</Text>
        </Text>
        <Text style={styles.Text_alt}>
          Account Number(PKR): <Text style={{fontSize: 20}}>{text_AccNo}</Text>
        </Text>
        <Text style={styles.Text_alt}>
          IBAN: <Text style={{fontSize: 20}}>{text_IBAN}</Text>
        </Text>
        <Text style={styles.Text_alt}>
          BANK: <Text style={{fontSize: 20}}>{text_Bank}</Text>
        </Text>
        <Text style={styles.Text_alt}>
          Swift Code: <Text style={{fontSize: 20}}>{text_SwiftCode}</Text>
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#880808',
            marginTop: '15%',
            marginBottom: '9%',
            marginLeft: '8%',
            marginRight: '8%',
            height: 55,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          activeOpacity={0.4}
          onPress={onPress}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            DONATE NOW
          </Text>
        </TouchableOpacity>
      </View>
       </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  Container: {
    marginTop: 75,
    margin:32,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  Text_alt: {
    paddingLeft: 25,
    paddingTop: 5,
    fontSize: 23,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#880808',
  },
  ngotext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#880808',
  },
});
export default DonationDetails;
