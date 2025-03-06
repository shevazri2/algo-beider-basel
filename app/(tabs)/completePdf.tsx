import { StyleSheet, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { PdfSource } from '@/constants/PdfSource';
import Pdf from 'react-native-pdf';


export default function completePdfScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: 'Algorithmen beider Basel',
        }}
      />
      <Pdf
        trustAllCerts={false}
        source={PdfSource}
        style={styles.pdf}
        enablePaging={true}
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
  },
});

