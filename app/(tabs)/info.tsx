import { StyleSheet, View, Text, SectionList, Image, useColorScheme, Dimensions } from 'react-native';
import { Stack } from 'expo-router';
import { ThemeColors } from '@/constants/Colors';

const changelogData = [
  {
    title: 'Version 1.4 - 01.01.2026',
    data: [
      {
        title: 'Algorithmus C1 - Reanimation Erwachsene',
        subitems: ['Pre-Charging vor jeder Rhythmusanalyse eingefügt',
          'Vector Chnage bei 3. erfolgloser Defibrillation',
          'Zielwert für das etCO2 unter Reanimation erhöht',
          'Weitere Fachinformation hinzugefügt',
        ],
      },
      {
        title: 'Algorithmus C2 - ROSC',
        subitems: ['Temperaturwert für eine Antipyrese nach Reanimation auf >37.5°C angepasst'],
      },
      {
        title: 'Algorithmus C3 - Bradykardie',
        subitems: ['Entscheidungskasten bezüglich bedrohlicher Symptome mit ROSC ergänzt',
          'Der Entscheidungskasten Asystolie-Risiko wurde als erwäge zur elektrischen/medikamentösen Therapie weitergeleitet',
          'Keine Atropin-Gabe bei höhergradiger AV-Blockierung'
        ]
      },
      {
        title: 'Algorithmus pC1 - Reanimation Pädiatrie',
        subitems: ['Pre-Charging vor jeder Rhythmusanalyse eingefügt',
          'Vector Change bei 3. erfolgloser Defibrillation',
          'Zielwert für das etCO2 unter Reanimation erhöht',
          'Bei Säuglingen entfällt die 2-Finger-Technik für die Thoraxkompressionen. Neu wird nur noch die 2-Daumen-Technik empfohlen.',
          'Für die Stufenweise Steiergung der Defibrillationsenergie wurde das persistierende Kammerflimmern/PVT ergänzt'
        ],
      },
      {
        title: 'Algorithmus Z2 - Fürsorgerische Unterbringung',
        subitems: ['Die telefonische Kontaktaufnahme für den Kanton Aargau wurde angefügt'],
      },
      {
        title: 'Algorithmus Z8 - Spitalliste',
        subitems: ['Neu ist das Felix-Platter-Spital in der Spitalliste aufgeführt. Gleichzeitig haben wir die Fachdisziplin Urologie angefügt.'],
      }
    ]
  },
  {
    title: 'Version 1.3 - 01.07.2025',
    data: [
      {
        title: 'Algorithmus pE1 - Analgesie Pädiatrie',
        subitems: ['Änderung Paracetamoldosierung für pädiatrische Patient:innen'],
      },
      {
        title: 'Algorithmus E6 - Terminale Situation',
        subitems: ['Neuer Algorithmus inkl. Fachinformation. Der Algorithmus wurde bewusst schlank gehalten und eine Tabelle mit Dosierungsideen in die Fachinformation übernommen. Zusätzlich wurde mit diesen möglichen Dosierungen ein Verordnungsblatt «terminale Situation» erstellt, das bei den Rettungsdiensten vorgehalten wird und vom Notarzt ausgefüllt werden kann.'],
      },
      {
        title: 'Spitalliste Z8',
        subitems: ['Auswahl Zielklinik: Tabelle aktualisiert und neu in die Algorithmen eingefügt. Um Querformat zu vermeiden wurde die Tabelle auf 2 Seiten verteilt.'],
      },
      {
        title: 'Algorithmus pC2 - ROSC Pädiatrie',
        subitems: ['Anpassung der Dosierung von Paracetamol für pädiatrische Patient:innen'],
      },
      {
        title: 'Algorithmus pE4 - Sepsis / Septischer Schock Pädiatrie',
        subitems: ['Anpassung der Dosierung von Paracetamol für pädiatrische Patient:innen'],
      }
    ]
  },
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
        <Text style={styles.versionLabel}>Algorithmen-Version: 1.4</Text>
        <Text style={styles.versionLabel}>App-Version: 1.1.0</Text>
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

