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
          pages: [[16, 18],[111, 113]]
        },
        {
          keyId: 'A2',
          title: 'Anaphylaxie',
          pediatricKeyId: 'pA2',
          pages: [[19, 21], [114, 116]]
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
          pages: [[], [117, 119]]

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
          pages: [[37, 39], [120, 122]]
        },
        {
          keyId: 'C2',
          title: 'ROSC - Return of spontaneous circulation',
          pediatricKeyId: 'pC2',
          pages: [[40, 42], [123, 125]],
        },
        {
          keyId: 'C3',
          title: 'Bradykardie',
          pediatricKeyId: 'pC3', 
          pages:[[43, 45],[126, 128]],
        },
        {
          keyId: 'C4',
          title: 'Tachykardie',
          pediatricKeyId: 'pC4',
          pages:[[46, 48],[129, 131]]
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
          pages:[[64, 66],[132, 134]],
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
          pages:[[73,75],[135, 137]] ,
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
          pages:[[82, 84],[138, 140]],
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
          pages:[[91, 93],[141, 143]],
        },
        {
          keyId: 'E5',
          title: 'Psychischer Ausnahmezustand',
          pages:[[94, 96],[]],
        }
      ]
    },
    {
      title: 'Gynäkologie / Schwangerschaft',
      data: [
        {
          keyId: 'G1',
          title: 'Geburt',
          pages: [[97, 101]]
        },
        {
          title: 'Neugeborenenversorgung',
          pediatricKeyId: 'pG2',
          pages: [[], [102, 104]]
        },
        {
          keyId: 'G3',
          title: 'Peripartale Hämorrhagie',
          pages:[[105, 107]],
        },
        {
          keyId: 'G4',
          title: 'Präeklampsie / Eklampsie',
          pages:[[108, 110],[]],
        }
      ]
    },
    {
      title: 'Zusatzinformationen',
      data: [
        {
          keyId: 'Z1a',
          title: 'Checkliste RSI - VOR Intubation',
          pages: [[144]]
        },
        {
          keyId: 'Z1b',
          title: 'Checkliste RSI - NACH Intubation',
          pages: [[145]]
        },
        {
          keyId: 'Z2',
          title: 'Fürsorgerische Unterbringung',
          pages:[[146, 148],[]],
        },
        {
          keyId: 'Z3',
          title: 'Verzichtserklärung / Patientenverfügung',
          pages:[[149, 151],[]],
        },
        {
          keyId: 'Z4',
          title: 'Vorgehen Todesfall',
          pages: [[152, 154]]
        },
        {
          keyId: 'Z5',
          title: 'Pre-Triage / MANV',
          pages: [[155, 157]]
        },
        {
          keyId: 'Z6',
          title: 'Patientenübergabe',
          pages: [[158, 160]]
        },
        {
          keyId: 'Z7',
          title: 'Checkliste IPS-Verlegung',
          pages: [[161]]
        }
      ]
    }
  ],
  drugs: [
    {
      title: 'Verdünnungs-Schemata',
      page: 203,
    }, {
      title: 'Perfusor-Schemata',
      page: 204,
    }, {
      title: 'Acetylsalicylsäure', 
      page: 163,
      categories: [1]
    }, {
      title: 'Adenosin',
      page: 164,
      categories: [3]
    }, {
      title: 'Adrenalin',
      page: 165,
      categories: [1, 2, 3]
    }, {
      title: 'Aktivkohle',
      page: 166,
      categories: [1]
    }, {
      title: 'Amiodaron',
      page: 167,
      categories: [1, 2]
    }, {
      title: 'Atropin',
      page: 168,
      categories: [1, 2]
    }, {
      title: 'Butylscopolamin',
      page: 169,
      categories: [1]
    }, {
      title: 'Clemastin',
      page: 170,
      categories: [1]
    }, {
      title: 'Ephedrin',
      page: 171,
      categories: [2]
    }, {
      title: 'Esmolol',
      page: 172,
      categories: [3]
    }, {
      title: 'Fentanyl',
      page: 173,
      categories: [1]
    }, {
      title: 'Flumazenil',
      page: 174,
      categories: [1]
    }, {
      title: 'Furosemid',
      page: 175,
      categories: [1]
    }, {
      title: 'Glucose',
      page: 176,
      categories: [1]
    }, {
      title: 'Heparin',
      page: 177,
      categories: [4]
    }, {
      title: 'Hexoprenalin',
      page: 178,
      categories: [3]
    }, {
      title: 'Ketamin',
      page: 179,
      categories: [1, 2]
    }, {
      title: 'Labetalol',
      page: 180,
      categories: [2, 3]
    }, {
      title: 'Levetiracetam',
      page: 181,
      categories: [2]
    }, {
      title: 'Lidocain',
      page: 182,
      categories: [1]
    }, {
      title: 'Magnesiumsulfat',
      page: 183,
      categories: [1, 2]
    }, {
      title: 'Metamizol',
      page: 184,
      categories: [1]
    }, {
      title: 'Methylprednisolon',
      page: 185,
      categories: [1]
    }, {
      title: 'Midazolam',
      page: 186,
      categories: [1, 2, 3]
    }, {
      title: 'Morphin',
      page: 187,
      categories: [1]
    }, {
      title: 'Nalbuphin',
      page: 188,
      categories: [1, 2]
    }, {
      title: 'Naloxon',
      page: 189,
      categories: [1]
    }, {
      title: 'Nitroglycerin',
      page: 190,
      categories: [1]
    }, {
      title: 'Noradrenalin',
      page: 191,
      categories: [3]
    }, {
      title: 'Ondansetron',
      page: 192,
      categories: [1]
    }, {
      title: 'Oxybuprocaine',
      page: 193,
      categories: [1]
    }, {
      title: 'Oxytocin',
      page: 194,
      categories: [2]
    }, {
      title: 'Paracetamol',
      page: 195,
      categories: [1]
    }, {
      title: 'Phenylephrin',
      page: 196, 
      categories: [2]
    }, {
      title: 'Propofol',
      page: 197,
      categories: [3]
    }, {
      title: 'Rocuronium',
      page: 198,
      categories: [3]
    }, {
      title: 'Salbutamol / Ipratropiumbromid',
      page: 199,
      categories: [1]
    }, {
      title: 'Ticagrelor',
      page: 200,
      categories: [4]
    }, {
      title: 'Tranexamsäure',
      page: 201,
      categories: [1]
    }, {
      title: 'Urapidil',
      page: 202,
      categories: [1, 2]
    }
  ]
} as AppDataType;

export const Algos = AppData.sections.forEach(() => {

})