import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { ThemeColors } from '@/constants/Colors';

type Props = {
  title: string,
  categories?: Array<number>
  page: number
}

export function DrugListItem({ title, page, categories }: Props) {
  return (
    <Link href={{
      pathname: '/algo/[key]',
      params: { title: title, pages: page, key: title}
    }}
    style={styles.link}
    >
      <View style={categories ? [styles.drugButton, getCorrectStylesForCategory(true, categories)] : styles.drugButton}>
        {
          categories ? (
            <View style={styles.categoryWrapper}>
              { categories.map((category, index) => <View style={[styles.categoryIndicators, getCorrectStylesForCategory(false, [category])]} key={category.toString() + index.toString()} />) }
            </View>
          ) : ('')
        }
        <Text style={categories ? styles.drugButtonTxt : styles.drugButtonTxtCenter}>{ title }</Text>
      </View>
    </Link>
    
  )
}

const getCorrectStylesForCategory = (isWrapper: boolean, categories: Array<number>) => {
  let tempStyles: any = {}
  let attribute: string = isWrapper ? 'borderColor' : 'backgroundColor';
  
  tempStyles[attribute] = categoryStyles[categories[0].toString()] as string;

  return StyleSheet.create(tempStyles);
}

const categoryStyles: any = {
  '1': 'green',
  '2': 'yellow',
  '3': 'red',
  '4': 'pink',
}

const styles = StyleSheet.create({
  link: {
    marginTop: 3,
    marginBottom: 3,
  },
  drugButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#333',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    columnGap: 8,
    backgroundColor: ThemeColors.white,
  },
  drugButtonTxt: {
    fontSize: 16,
    flexGrow: 1,
    fontWeight: 'bold',
    verticalAlign: 'middle',
  },
  drugButtonTxtCenter: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flexGrow: 1,
    verticalAlign: 'middle',
  },
  drugButtonTxtWrapper: {
    flex: 1,
  },
  categoryWrapper: {
    flexGrow: 0,
    height: '100%',
    width: 39,
    display: 'flex',
    flexDirection: 'row',
  },
  categoryIndicators: {
    flexBasis: '33%',
    flexGrow: 1,
    height: '100%',
  }
})