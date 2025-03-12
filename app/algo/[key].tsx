import { AppData } from '@/constants/Data';
import { PdfSource } from '@/constants/PdfSource';
import { serializeData } from '@/hooks/serializeData';
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pdf from 'react-native-pdf';
import { getParamsByPage } from '@/hooks/getParamsByPage';


export default function AlgoScreen() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const { key, pages, title } = params as { key?: string, pages: string, title?: string };
  let algoData: any = {};

  if (key) {
    algoData = serializeData(AppData.sections)[key];
  }
  const splitPages = pages.split(',').map((value: string) => { return parseInt(value)});

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
        page={splitPages[0]}
        enablePaging={true}
        horizontal={true}
        onError={(error) => {
          console.log(error);
        }}
        onPageChanged={(page: number) => {
          let sameChapter: boolean = false;

          if (splitPages.length > 1) {
            sameChapter = splitPages[0] <= page && splitPages[1] >= page;
          } else {
            sameChapter = splitPages[0] === page;
          }

          if (!sameChapter) {
            const paramsByPageNumber : Array<any>= getParamsByPage(page);

            if (paramsByPageNumber[0]) {
              navigation.setOptions({ title: paramsByPageNumber[1] });
            }
          }
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

