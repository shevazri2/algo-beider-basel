import { AppData } from '@/constants/Data';
import { PdfSource } from '@/constants/PdfSource';
import { serializeData } from '@/hooks/serializeData';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet, View } from 'react-native';
import Pdf from 'react-native-pdf';


export default function AlgoScreen() {

  const params = useLocalSearchParams();
  const { key, pages } = params as { key: string, pages: string };
  const algoData: any = serializeData(AppData.sections)[key];
  const splitPages = pages.split(',');

  console.log('splitPages', splitPages);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: key + '  ' + algoData.title,
        }}
      />
      <Pdf
        trustAllCerts={false}
        source={PdfSource}
        style={styles.pdf}
        page={parseInt(splitPages[0])}
        enablePaging={true}
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
  }
});

