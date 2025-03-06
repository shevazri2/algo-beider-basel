import { AppData } from '@/constants/Data';
import { PdfSource } from '@/constants/PdfSource';
import { serializeData } from '@/hooks/serializeData';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pdf from 'react-native-pdf';


export default function AlgoScreen() {

  const params = useLocalSearchParams();
  const { key, pages, title } = params as { key?: string, pages: string, title?: string };
  let algoData: any = {};

  if (key) {
    algoData = serializeData(AppData.sections)[key];
  }
  const splitPages = pages.split(',');

  return (
    <View style={styles.container}>
      { !title ? (<Stack.Screen
        options={{
          title: key + '  ' + algoData.title,
        }}
      />) : (<Stack.Screen
        options={{
          title,
        }}
      />) }
      <Pdf
        trustAllCerts={false}
        source={PdfSource}
        style={styles.pdf}
        page={parseInt(splitPages[0])}
        enablePaging={true}
        horizontal={true}
        onLoadComplete={(numberOfPages) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page) => {
          console.log(`Current page: ${page}`);
          console.log('page', page);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
      ></Pdf>
      <View style={styles.infoBox}>
        <Ionicons style={styles.icon} name="information-circle" size={28} color="blue"></Ionicons>
        <Text style={styles.textContainer}>
        Nach links oder rechts wischen, um zwischen den Seiten zu wechseln.</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  infoBox: {
    backgroundColor: '#f2f2f2',
    padding: 18,
    fontSize: 18,
    boxShadow: '0px -5px 10px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    flexBasis: 32,
    flexGrow: 0,
    flexShrink: 0,
  },
  textContainer: {
    flex: 1,
    fontSize: 16,
  }
});

