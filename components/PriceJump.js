import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
  {
    region: 'Pakistan',
    rank: '62',
    normal: '56.2',
    average: '192.7',
    departure: '243',
    comment: '1st highest (previous record 116.7 mm in 2020)',
  },
  {
    region: 'Azad Jammu & Kashmir',
    rank: '34',
    normal: '150.7',
    average: '146.1',
    departure: '-3',
    comment: '29th highest (record 308.2 mm in 1997)',
  },
  {
    region: 'Balochistan',
    rank: '62',
    normal: '22.4',
    average: '154.9',
    departure: '590',
    comment: '1st highest (previous record 83.3 mm in 2020)',
  },
  {
    region: 'Gilgit Baltistan',
    rank: '61',
    normal: '16.7',
    average: '55.7',
    departure: '233',
    comment: '2nd highest (record 89.1 mm in 1997)',
  },
  {
    region: 'Khyber Pakhtunkhwa',
    rank: '59',
    normal: '103.6',
    average: '163.9',
    departure: '58',
    comment: '4th highest (record 225.4 mm in 2010)',
  },
  {
    region: 'Punjab',
    rank: '53',
    normal: '93.3',
    average: '141.7',
    departure: '52',
    comment: '10th highest (record 282.6 mm in 1973)',
  },
  {
    region: 'Sindh',
    rank: '62',
    normal: '53.6',
    average: '442.8',
    departure: '726',
    comment: '1st highest (previous record 247.9 mm in 2020)',
  },
];

const Table = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.header]}>Region</Text>
        <Text style={[styles.cell, styles.header]}>Rank (of 62)</Text>
        <Text style={[styles.cell, styles.header]}>Normal (mm)</Text>
        <Text style={[styles.cell, styles.header]}>Average (mm)</Text>
        <Text style={[styles.cell, styles.header]}>Departure (percent)</Text>
        <Text style={[styles.cell, styles.header]}>Comment</Text>
      </View>
      {data.map((row, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{row.region}</Text>
          <Text style={styles.cell}>{row.rank}</Text>
          <Text style={styles.cell}>{row.normal}</Text>
          <Text style={styles.cell}>{row.average}</Text>
          <Text style={styles.cell}>{row.departure}</Text>
          <Text style={styles.cell}>{row.comment}</Text>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    margin:5,
  },
  cell: {
    padding: 10,
    flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
},
header: {
  fontWeight: 'bold',
  backgroundColor: '#f2f2f2',
},

})

export default Table;
