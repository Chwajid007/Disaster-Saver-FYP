import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,Image,ScrollView } from 'react-native';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';

const PriceJump = () => {
  const [sum, setSum] = useState(0);
  const [average, setAverage] = useState(0);

  const [sumc, setSumc] = useState(0);
  const [averagec, setAveragec] = useState(0);

  useEffect(() => {
    const generateDataset = () => {
      const dataset = [];

      for (let i = 0; i < 5000; i++) {
        const value = Math.floor(Math.random() * 24) + 15; // Generate a random numeric value between 15 and 38
        dataset.push(value);
      }

      return dataset;
    };

    const generateDataset2021 = () => {
      const dataset = [];

      for (let i = 0; i < 5000; i++) {
        const value = Math.floor(Math.random() * 13) + 28;
        dataset.push(value);
      }

      return dataset;
    };

    const datasetc = generateDataset2021();
    const sumValuec = datasetc.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const averageValuec = sumValuec / datasetc.length;

    setSumc(sumValuec);
    setAveragec(averageValuec);


    const dataset = generateDataset();

    const sumValue = dataset.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const averageValue = sumValue / dataset.length;

    setSum(sumValue);
    setAverage(averageValue);

    const workbookc = XLSX.utils.book_new();
    const worksheetc = XLSX.utils.aoa_to_sheet([['Data'], ...datasetc.map((value) => [value])]);

    const sumFormulac = `SUM(B2:B${datasetc.length + 1})`;
    const averageFormulac = `AVERAGE(B2:B${datasetc.length + 1})`;

    XLSX.utils.sheet_add_aoa(worksheet, [['Sum', sumFormulac], ['Average', averageFormulac]], {
      origin: -1,
    });

    XLSX.utils.book_append_sheet(workbookc, worksheetc, 'Sheet1');

    const wboutc = XLSX.write(workbookc, { type: 'binary', bookType: 'xlsx' });

    const pathc = RNFS.DocumentDirectoryPath + '/data.xlsx';

    RNFS.writeFile(pathc, wboutc, 'ascii').then(() => {
      console.log('File saved successfully!');
    });

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([['Data'], ...dataset.map((value) => [value])]);

    const sumFormula = `SUM(B2:B${dataset.length + 1})`;
    const averageFormula = `AVERAGE(B2:B${dataset.length + 1})`;

    XLSX.utils.sheet_add_aoa(worksheet, [['Sum', sumFormula], ['Average', averageFormula]], {
      origin: -1,
    });

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    const wbout = XLSX.write(workbook, { type: 'binary', bookType: 'xlsx' });

    const path = RNFS.DocumentDirectoryPath + '/data.xlsx';

    RNFS.writeFile(path, wbout, 'ascii').then(() => {
      console.log('File saved successfully!');
    });
  }, []);
  const price=()=>{
    const pricesum =(4500/2200)*100;
    return pricesum.toFixed(2)

  }
  const handleSave = () => {
    const sourcePath = RNFS.DocumentDirectoryPath + '/data.xlsx';
    const targetPath = `${RNFS.DocumentDirectoryPath}/saved/data.xlsx`; // Save to a different directory

    RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/saved`) // Create the directory if it doesn't exist
      .then(() => RNFS.copyFile(sourcePath, targetPath))
      .then(() => {
        console.log('File copied successfully!');
      })
      .catch((error) => {
        console.log('Error copying file:', error);
      });
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      
      <View style={styles.block}>
        <Text style={styles.value}>RICE CROP 2022</Text>
        <Text style={styles.label}>5000 acre production: {sum}maunds</Text>
        <Text style={styles.label}>Average per acre:  {average}</Text>
        <Text style={styles.label}>Price per maund:  4500</Text>

        <Text style={styles.value}>RICE CROP 2021</Text>
        <Text style={styles.label}>5000 acre production: {sumc}</Text>
        <Text style={styles.label}>Average per acre:  {averagec}</Text>
        <Text style={styles.label}>Price per maund:  2200</Text>

        <Text style={styles.value}>Price Jump</Text>
        <Text style={styles.label}>There is {price()}% hike in one year</Text>
        </View>

        <View>
          <Image         
          source={require('../assets/images/RiceCrops.jpg')}
          style={styles.picstyle}
          >
        </Image>
        </View>
     
      {/* <Button title="Save Excel Sheet" onPress={handleSave} /> */}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  block: {
    //flexDirection: 'row',
    
    alignItems: 'center',
    margin: 10,
    width: '100%',
    backgroundColor: '#880808',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
   // flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color:"white",
    paddingBottom:5,
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    padding:20,
    color:"white"
  },
  picstyle:{
   
      width: 450, // Adjust the width to your desired size
      height: 300, // Adjust the height to your desired size
      resizeMode: 'contain', // Adjust the resizing mode as needed
  }
    
});

export default PriceJump;
