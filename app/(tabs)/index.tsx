import { AlgoListItem } from '@/components/AlgoListItem';
import { ThemeColors } from '@/constants/Colors';
import { AppData, SectionType } from '@/constants/Data';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { SectionList, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



export default function HomeScreen() {
  const [query, setQuery] = React.useState('');
  const [sections, setSections] = React.useState(AppData.sections);
  const colorScheme = useColorScheme();

  const sectionHeaderThemed = colorScheme === 'light' ? styles.sectionHeaderLight : styles.sectionHeaderDark;


  const onChangeQuery = (input: string) => {
    setQuery(input);
    
    const result = AppData.sections.reduce((accumulator: any, currentObj) => {
        let output = {} as SectionType;
        const transformedSearchQuery = input.toLowerCase()
        const currentTitle = currentObj.title
        const currentData = currentObj.data
      
        const filteredData = currentData.filter(item => {
          const transformedItem = item.title.toLowerCase()
          return transformedItem.includes(transformedSearchQuery)
        })
      
        if (filteredData.length) {
          output.title = currentTitle
          output.data = filteredData
        }
      
        if (Object.entries(output).length) {
          return [...accumulator, output]
        } else {
          return accumulator
        }
      }, []);
    

    setSections(result);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.queryContainer}>
          <TextInput
            value={query}
            onChangeText={onChangeQuery}
            placeholder="Suche nach Algorithmus"
            style={styles.queryInput}
          />
        </View>
        <SectionList
          sections={sections}
          stickySectionHeadersEnabled={true}
          keyExtractor={(item, index) => item.title + index.toString()}
          renderItem={({item}) => (
            <AlgoListItem keyId={item.keyId} title={item.title} pediatricKeyId={item.pediatricKeyId} pages={item.pages}></AlgoListItem>
          )}
          renderSectionHeader={({section: {title}}) => (

            <Text style={[styles.sectionHeader, sectionHeaderThemed]}>{title}</Text>
          )}
        >
        </SectionList>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    textAlign: 'center',
    fontSize: 24,
    paddingVertical: 6,
  },
  sectionHeaderDark: {
    backgroundColor: ThemeColors.black,
    color: ThemeColors.white,
  },
  sectionHeaderLight: {
    backgroundColor: ThemeColors.darkBlue,
    color: ThemeColors.white,
  },
  queryContainer: {
    backgroundColor: ThemeColors.lightBlue,
    padding: 9,
  },
  queryInput: {
    backgroundColor: ThemeColors.white,
    padding: 9,
    height: 40,
    fontSize: 18,
    borderWidth: 1,
    borderColor: ThemeColors.darkBlue,
  }
});

