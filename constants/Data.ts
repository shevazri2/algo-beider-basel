export type SectionType = {
  title: String,
  data: Array<AlgoType>,
}

export type AlgoType = {
  keyId?: string,
  title: string,
  pediatricKeyId?: string,
  pages: Array<Array<number>>,
}

export type DrugsType = {
  title: string,
  page: number,
  categories?: Array<number> //1 = all, 2 = RS+NA, 3=NA, 4=DA Kardio
}

export type AppDataType = {
  sections: Array<SectionType>
  drugs: Array<DrugsType>
}

export const AppData = {
  sections: [
    {
      title: 'Einstieg',
      data: [
        {
          keyId: '00a',
          title: 'Kompetenzstufen',
          pages: [[6]]
        },
        {
          keyId: '00b',
          title: 'Indikationsliste Notärzt:in',
          pages: [[7]]
        },
        {
          keyId: '01',
          title: 'Primary Survey',
          pages: [[10, 12]]
        },
        {
          keyId: '02',
          title: 'Secondary Survey',
          pages: [[13, 15]]
        }
      ]
    },
    {
      title: 'Airway',
      data: [
        {
          keyId: 'A1',
          title: 'Fremdkörperaspiration',
          pediatricKeyId: 'pA1',
          pages: [[16, 18],[114, 116]]
        },
        {
          keyId: 'A2',
          title: 'Anaphylaxie',
          pediatricKeyId: 'pA2',
          pages: [[19, 21], [117, 119]]
        },
        {
          keyId: 'A3',
          title: 'Narkose',
          pages: [[22, 24]]
        },
        {
          keyId: 'A4',
          title: 'Schwieriger Atemweg',
          pages: [[25, 27]]
        }
      ]
    },
    {
      title: 'Breathing',
      data: [
        {
          keyId: 'B1',
          title: 'Asthma bronchiale / Exazerbierte COPD',
          pages: [[28, 30]]
        },
        {
          keyId: 'B2',
          title: 'Inhalationstrauma',
          pages: [[31, 33]]
        },
        {
          keyId: 'B3',
          title: 'NIV - Nicht-invasive Ventilation',
          pages: [[34, 36]]
        },
        {
          title: 'Respiratorische Störungen Pädiatrie',
          pediatricKeyId: 'pB1',
          pages: [[], [120, 122]]

        }
      ]
    },
    {
      title: 'Circulaton',
      data: [
        {
          keyId: 'C1',
          title: 'ALS - Advanced Life Support (nach ERC)',
          pediatricKeyId: 'pC1',
          pages: [[37, 40], [124, 126]]
        },
        {
          keyId: 'C2',
          title: 'ROSC - Return of spontaneous circulation',
          pediatricKeyId: 'pC2',
          pages: [[41, 43], [127, 129]],
        },
        {
          keyId: 'C3',
          title: 'Bradykardie',
          pediatricKeyId: 'pC3', 
          pages:[[44, 46],[130, 132]],
        },
        {
          keyId: 'C4',
          title: 'Tachykardie',
          pediatricKeyId: 'pC4',
          pages:[[47, 49],[133, 135]]
        },
        {
          keyId: 'C5',
          title: 'Magnetauflage Schrittmacher / ICD',
          pages:[[50, 52],[]],
        },
        {
          keyId: 'C6',
          title: 'Akutes Koronarsyndrom',
          pages:[[53, 55]], 
        },
        {
          keyId: 'C7',
          title: 'Aortendissektion',
          pages:[[56, 58],[]]
        },
        {
          keyId: 'C8',
          title: 'Herzinsuffizienz',
          pages: [[59, 61]],
        },
        {
          keyId: 'C9',
          title: 'Hypertensive Kreislaufstörung',
          pages:[[62, 64],[]],
        },
        {
          keyId: 'C10',
          title: 'Hämorrhagischer Schock',
          pediatricKeyId: 'pC10',
          pages:[[65, 67],[136, 138]],
        }
      ]
    },
    {
      title: 'Disability',
      data: [
        {
          keyId: 'D1',
          title: 'Bewusstseinsstörung',
          pages:[[68, 70],[]],
        },
        {
          keyId: 'D2',
          title: 'Stroke',
          pages: [[71, 73]]
        },
        {
          keyId: 'D3',
          title: 'Krampfanfall',
          pediatricKeyId: 'pD3',
          pages:[[74,76],[139, 141]] ,
        },
        {
          keyId: 'D4',
          title: 'Schädelhirntrauma (SHT)',
          pages:[[77, 79],[]],
        },
        {
          keyId: 'D5',
          title: 'Wirbelsäulentrauma / Immobilisation',
          pages: [[80, 82]]
        }
      ]
    },
    {
      title: 'Exposure / Environment',
      data: [
        {
          keyId: 'E1',
          title: 'Analgesie',
          pediatricKeyId: 'pE1',
          pages:[[83, 85],[142, 144]],
        },
        {
          keyId: 'E2',
          title: 'Verbrennung / Verätzung',
          pages: [[86, 88]]
        },
        {
          keyId: 'E3',
          title: 'Intoxikation',
          pages: [[89, 91]]
        },
        {
          keyId: 'E4',
          title: 'Sepsis / septischer Schock',
          pediatricKeyId: 'pE4',
          pages:[[92, 94],[145, 147]],
        },
        {
          keyId: 'E5',
          title: 'Psychischer Ausnahmezustand',
          pages:[[95, 97],[]],
        },
        {
          keyId: 'E6',
          title: 'Terminale Situation',
          pages: [[98, 100]]
        }
      ]
    },
    {
      title: 'Gynäkologie / Schwangerschaft',
      data: [
        {
          keyId: 'G1',
          title: 'Geburt',
          pages: [[101, 105]]
        },
        {
          title: 'Neugeborenenversorgung',
          pediatricKeyId: 'pG2',
          pages: [[], [106, 108]]
        },
        {
          keyId: 'G3',
          title: 'Peripartale Hämorrhagie',
          pages:[[109, 111]],
        },
        {
          keyId: 'G4',
          title: 'Präeklampsie / Eklampsie',
          pages:[[112, 114],[]],
        }
      ]
    },
    {
      title: 'Zusatzinformationen',
      data: [
        {
          keyId: 'Z1a',
          title: 'Checkliste RSI - VOR Intubation',
          pages: [[148]]
        },
        {
          keyId: 'Z1b',
          title: 'Checkliste RSI - NACH Intubation',
          pages: [[149]]
        },
        {
          keyId: 'Z2',
          title: 'Fürsorgerische Unterbringung',
          pages:[[150, 152],[]],
        },
        {
          keyId: 'Z3',
          title: 'Verzichtserklärung / Patientenverfügung',
          pages:[[153, 155],[]],
        },
        {
          keyId: 'Z4',
          title: 'Vorgehen Todesfall',
          pages: [[156, 158]]
        },
        {
          keyId: 'Z5',
          title: 'Pre-Triage / MANV',
          pages: [[159, 161]]
        },
        {
          keyId: 'Z6',
          title: 'Patientenübergabe',
          pages: [[162, 164]]
        },
        {
          keyId: 'Z7',
          title: 'Checkliste IPS-Verlegung',
          pages: [[165]]
        },
        {
          keyId: 'Z8',
          title: 'Spitalliste - Auswahl Zielklinik',
          pages: [[166, 167]]
        }
      ]
    }
  ],
  drugs: [
    {
      title: 'Verdünnungs-Schemata',
      page: 209,
    }, {
      title: 'Perfusor-Schemata',
      page: 210,
    }, {
      title: 'Acetylsalicylsäure', 
      page: 169,
      categories: [1]
    }, {
      title: 'Adenosin',
      page: 170,
      categories: [3]
    }, {
      title: 'Adrenalin',
      page: 171,
      categories: [1, 2, 3]
    }, {
      title: 'Aktivkohle',
      page: 172,
      categories: [1]
    }, {
      title: 'Amiodaron',
      page: 173,
      categories: [1, 2]
    }, {
      title: 'Atropin',
      page: 174,
      categories: [1, 2]
    }, {
      title: 'Butylscopolamin',
      page: 175,
      categories: [1]
    }, {
      title: 'Clemastin',
      page: 176,
      categories: [1]
    }, {
      title: 'Ephedrin',
      page: 177,
      categories: [2]
    }, {
      title: 'Esmolol',
      page: 178,
      categories: [3]
    }, {
      title: 'Fentanyl',
      page: 179,
      categories: [1]
    }, {
      title: 'Flumazenil',
      page: 180,
      categories: [1]
    }, {
      title: 'Furosemid',
      page: 181,
      categories: [1]
    }, {
      title: 'Glucose',
      page: 182,
      categories: [1]
    }, {
      title: 'Heparin',
      page: 183,
      categories: [4]
    }, {
      title: 'Hexoprenalin',
      page: 184,
      categories: [3]
    }, {
      title: 'Ketamin',
      page: 185,
      categories: [1, 2]
    }, {
      title: 'Labetalol',
      page: 186,
      categories: [2, 3]
    }, {
      title: 'Levetiracetam',
      page: 187,
      categories: [2]
    }, {
      title: 'Lidocain',
      page: 188,
      categories: [1]
    }, {
      title: 'Magnesiumsulfat',
      page: 189,
      categories: [1, 2]
    }, {
      title: 'Metamizol',
      page: 190,
      categories: [1]
    }, {
      title: 'Methylprednisolon',
      page: 191,
      categories: [1]
    }, {
      title: 'Midazolam',
      page: 192,
      categories: [1, 2, 3]
    }, {
      title: 'Morphin',
      page: 193,
      categories: [1]
    }, {
      title: 'Nalbuphin',
      page: 194,
      categories: [1, 2]
    }, {
      title: 'Naloxon',
      page: 195,
      categories: [1]
    }, {
      title: 'Nitroglycerin',
      page: 196,
      categories: [1]
    }, {
      title: 'Noradrenalin',
      page: 197,
      categories: [3]
    }, {
      title: 'Ondansetron',
      page: 198,
      categories: [1]
    }, {
      title: 'Oxybuprocaine',
      page: 199,
      categories: [1]
    }, {
      title: 'Oxytocin',
      page: 200,
      categories: [2]
    }, {
      title: 'Paracetamol',
      page: 201,
      categories: [1]
    }, {
      title: 'Phenylephrin',
      page: 202, 
      categories: [2]
    }, {
      title: 'Propofol',
      page: 203,
      categories: [3]
    }, {
      title: 'Rocuronium',
      page: 204,
      categories: [3]
    }, {
      title: 'Salbutamol / Ipratropiumbromid',
      page: 205,
      categories: [1]
    }, {
      title: 'Ticagrelor',
      page: 206,
      categories: [4]
    }, {
      title: 'Tranexamsäure',
      page: 207,
      categories: [1]
    }, {
      title: 'Urapidil',
      page: 208,
      categories: [1, 2]
    }
  ]
} as AppDataType;

export const Algos = AppData.sections.forEach(() => {

})