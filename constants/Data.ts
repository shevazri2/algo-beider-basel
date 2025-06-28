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
          pages: [[37, 39], [123, 125]]
        },
        {
          keyId: 'C2',
          title: 'ROSC - Return of spontaneous circulation',
          pediatricKeyId: 'pC2',
          pages: [[40, 42], [126, 128]],
        },
        {
          keyId: 'C3',
          title: 'Bradykardie',
          pediatricKeyId: 'pC3', 
          pages:[[43, 45],[129, 131]],
        },
        {
          keyId: 'C4',
          title: 'Tachykardie',
          pediatricKeyId: 'pC4',
          pages:[[46, 48],[132, 134]]
        },
        {
          keyId: 'C5',
          title: 'Magnetauflage Schrittmacher / ICD',
          pages:[[49, 51],[]],
        },
        {
          keyId: 'C6',
          title: 'Akutes Koronarsyndrom',
          pages:[[52, 54]], 
        },
        {
          keyId: 'C7',
          title: 'Aortendissektion',
          pages:[[55, 57],[]]
        },
        {
          keyId: 'C8',
          title: 'Herzinsuffizienz',
          pages: [[58, 60]],
        },
        {
          keyId: 'C9',
          title: 'Hypertensive Kreislaufstörung',
          pages:[[61, 63],[]],
        },
        {
          keyId: 'C10',
          title: 'Hämorrhagischer Schock',
          pediatricKeyId: 'pC10',
          pages:[[64, 66],[135, 137]],
        }
      ]
    },
    {
      title: 'Disability',
      data: [
        {
          keyId: 'D1',
          title: 'Bewusstseinsstörung',
          pages:[[67, 69],[]],
        },
        {
          keyId: 'D2',
          title: 'Stroke',
          pages: [[70, 72]]
        },
        {
          keyId: 'D3',
          title: 'Krampfanfall',
          pediatricKeyId: 'pD3',
          pages:[[73,75],[138, 140]] ,
        },
        {
          keyId: 'D4',
          title: 'Schädelhirntrauma (SHT)',
          pages:[[76, 78],[]],
        },
        {
          keyId: 'D5',
          title: 'Wirbelsäulentrauma / Immobilisation',
          pages: [[79, 81]]
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
          pages:[[82, 84],[141, 143]],
        },
        {
          keyId: 'E2',
          title: 'Verbrennung / Verätzung',
          pages: [[85, 87]]
        },
        {
          keyId: 'E3',
          title: 'Intoxikation',
          pages: [[88, 90]]
        },
        {
          keyId: 'E4',
          title: 'Sepsis / septischer Schock',
          pediatricKeyId: 'pE4',
          pages:[[91, 93],[144, 146]],
        },
        {
          keyId: 'E5',
          title: 'Psychischer Ausnahmezustand',
          pages:[[94, 96],[]],
        },
        {
          keyId: 'E6',
          title: 'Terminale Situation',
          pages: [[97, 99]]
        }
      ]
    },
    {
      title: 'Gynäkologie / Schwangerschaft',
      data: [
        {
          keyId: 'G1',
          title: 'Geburt',
          pages: [[100, 104]]
        },
        {
          title: 'Neugeborenenversorgung',
          pediatricKeyId: 'pG2',
          pages: [[], [105, 107]]
        },
        {
          keyId: 'G3',
          title: 'Peripartale Hämorrhagie',
          pages:[[108, 110]],
        },
        {
          keyId: 'G4',
          title: 'Präeklampsie / Eklampsie',
          pages:[[111, 113],[]],
        }
      ]
    },
    {
      title: 'Zusatzinformationen',
      data: [
        {
          keyId: 'Z1a',
          title: 'Checkliste RSI - VOR Intubation',
          pages: [[147]]
        },
        {
          keyId: 'Z1b',
          title: 'Checkliste RSI - NACH Intubation',
          pages: [[148]]
        },
        {
          keyId: 'Z2',
          title: 'Fürsorgerische Unterbringung',
          pages:[[149, 151],[]],
        },
        {
          keyId: 'Z3',
          title: 'Verzichtserklärung / Patientenverfügung',
          pages:[[152, 154],[]],
        },
        {
          keyId: 'Z4',
          title: 'Vorgehen Todesfall',
          pages: [[155, 157]]
        },
        {
          keyId: 'Z5',
          title: 'Pre-Triage / MANV',
          pages: [[158, 160]]
        },
        {
          keyId: 'Z6',
          title: 'Patientenübergabe',
          pages: [[161, 163]]
        },
        {
          keyId: 'Z7',
          title: 'Checkliste IPS-Verlegung',
          pages: [[164]]
        },
        {
          keyId: 'Z8',
          title: 'Spitalliste - Auswahl Zielklinik',
          pages: [[165, 166]]
        }
      ]
    }
  ],
  drugs: [
    {
      title: 'Verdünnungs-Schemata',
      page: 208,
    }, {
      title: 'Perfusor-Schemata',
      page: 209,
    }, {
      title: 'Acetylsalicylsäure', 
      page: 168,
      categories: [1]
    }, {
      title: 'Adenosin',
      page: 169,
      categories: [3]
    }, {
      title: 'Adrenalin',
      page: 170,
      categories: [1, 2, 3]
    }, {
      title: 'Aktivkohle',
      page: 171,
      categories: [1]
    }, {
      title: 'Amiodaron',
      page: 172,
      categories: [1, 2]
    }, {
      title: 'Atropin',
      page: 173,
      categories: [1, 2]
    }, {
      title: 'Butylscopolamin',
      page: 174,
      categories: [1]
    }, {
      title: 'Clemastin',
      page: 175,
      categories: [1]
    }, {
      title: 'Ephedrin',
      page: 176,
      categories: [2]
    }, {
      title: 'Esmolol',
      page: 177,
      categories: [3]
    }, {
      title: 'Fentanyl',
      page: 178,
      categories: [1]
    }, {
      title: 'Flumazenil',
      page: 179,
      categories: [1]
    }, {
      title: 'Furosemid',
      page: 180,
      categories: [1]
    }, {
      title: 'Glucose',
      page: 181,
      categories: [1]
    }, {
      title: 'Heparin',
      page: 182,
      categories: [4]
    }, {
      title: 'Hexoprenalin',
      page: 183,
      categories: [3]
    }, {
      title: 'Ketamin',
      page: 184,
      categories: [1, 2]
    }, {
      title: 'Labetalol',
      page: 185,
      categories: [2, 3]
    }, {
      title: 'Levetiracetam',
      page: 186,
      categories: [2]
    }, {
      title: 'Lidocain',
      page: 187,
      categories: [1]
    }, {
      title: 'Magnesiumsulfat',
      page: 188,
      categories: [1, 2]
    }, {
      title: 'Metamizol',
      page: 189,
      categories: [1]
    }, {
      title: 'Methylprednisolon',
      page: 190,
      categories: [1]
    }, {
      title: 'Midazolam',
      page: 191,
      categories: [1, 2, 3]
    }, {
      title: 'Morphin',
      page: 192,
      categories: [1]
    }, {
      title: 'Nalbuphin',
      page: 193,
      categories: [1, 2]
    }, {
      title: 'Naloxon',
      page: 194,
      categories: [1]
    }, {
      title: 'Nitroglycerin',
      page: 195,
      categories: [1]
    }, {
      title: 'Noradrenalin',
      page: 196,
      categories: [3]
    }, {
      title: 'Ondansetron',
      page: 197,
      categories: [1]
    }, {
      title: 'Oxybuprocaine',
      page: 198,
      categories: [1]
    }, {
      title: 'Oxytocin',
      page: 199,
      categories: [2]
    }, {
      title: 'Paracetamol',
      page: 200,
      categories: [1]
    }, {
      title: 'Phenylephrin',
      page: 201, 
      categories: [2]
    }, {
      title: 'Propofol',
      page: 202,
      categories: [3]
    }, {
      title: 'Rocuronium',
      page: 203,
      categories: [3]
    }, {
      title: 'Salbutamol / Ipratropiumbromid',
      page: 204,
      categories: [1]
    }, {
      title: 'Ticagrelor',
      page: 205,
      categories: [4]
    }, {
      title: 'Tranexamsäure',
      page: 206,
      categories: [1]
    }, {
      title: 'Urapidil',
      page: 207,
      categories: [1, 2]
    }
  ]
} as AppDataType;

export const Algos = AppData.sections.forEach(() => {

})