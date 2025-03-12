import { StyleSheet, View, Text, SectionList, Image, useColorScheme, Dimensions } from 'react-native';
import { Stack } from 'expo-router';
import { ThemeColors } from '@/constants/Colors';

const changelogData = [
  {
    title: 'Version 1.1 - 07.10.24',
    data: [
      {
        title: 'Algorithmus D2 - Stroke',
        subitems: ['Aktualiserung der Telefonnummer', 'Link zum RACE-Score-Tutorial eingefügt']
      }
    ]
  },
  {
    title: 'Version 1.0 - 01.10.24',
    data: [
      {
        title: 'Initiale Version',
        subitems: [],
      }
    ]
  }
]

export default function InfoScreen() {
  const colorScheme = useColorScheme();
  const themedSectionHeader = colorScheme === 'light' ? styles.sectionHeaderLight : styles.sectionHeaderLight;
  const themedTextColor = colorScheme === 'light' ? styles.textColorBlack : styles.textColorWhite;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: 'Algorithmen beider Basel',
        }}
      />
      <View style={styles.versionInfo}>
        <Text style={styles.versionLabel}>Algorithmen-Version: 1.1</Text>
        <Text style={styles.versionLabel}>App-Version: 1.0.0</Text>
      </View>
      <View>
        <Image style={{flex: 1, width: Dimensions.get('window').width, paddingTop: '40%'}}
          source={require('../../assets/images/logos.png')}
        />
      </View>
      <SectionList
        sections={changelogData}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => item.title + index.toString()}
        renderItem={({item}) => (
          <View style={styles.changeLogWrapper}>
            <Text style={[styles.topLevelElement, themedTextColor]}>{'\u2022'} {item.title}</Text>
            {item.subitems.map((r, subitemIndex) => <Text key={item.title + subitemIndex.toString()} style={[styles.subLevelElement, themedTextColor]}>{'\u2022'} {r}</Text>)}
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={[styles.sectionHeader, themedSectionHeader]}>{title}</Text>
        )}
      >
      </SectionList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: ThemeColors.darkBlue,
    textAlign: 'center',
    color: ThemeColors.white,
    fontSize: 20,
    paddingVertical: 6,
  },
  sectionHeaderDark: {
    color: ThemeColors.white,
    backgroundColor: ThemeColors.black,
  },
  sectionHeaderLight: {
    color: ThemeColors.white,
    backgroundColor: ThemeColors.darkBlue,
  },
  changeLogWrapper: {
    paddingBottom: 9,
    paddingLeft: 3,
  },
  textColorWhite: {
    color: ThemeColors.white,
  },
  textColorBlack: {
    color: ThemeColors.black,
  },
  topLevelElement: {
    fontSize: 16,
    marginTop: 9,
    marginBottom: 2,
  },
  subLevelElement: {
    fontSize: 16,
    paddingLeft: 18,
  },
  versionInfo: {
    backgroundColor: ThemeColors.lightBlue,
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 3,
    paddingRight: 3,
    justifyContent: 'space-between',
  },
  versionLabel: {
    flexBasis: '50%',
    flexGrow: 0
  }
});

