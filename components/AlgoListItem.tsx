import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

type Props = {
  title: string,
  keyId?: string,
  pediatricKeyId?: string,
  pages: Array<Array<number>>,
}

export function AlgoListItem({ title, keyId, pediatricKeyId, pages }: Props) {

  console.log('pages', pages);

  return (
    <View style={styles.listItem}>
      { keyId ? (
        <Text style={[styles.keyBasic, styles.keyId]}>{keyId}</Text>
      ) : (
        <View style={styles.keyBasic}></View>
      )}
      <Text style={styles.titleContainer}>{title}</Text>
      {
        pediatricKeyId ? (
          <Text style={[styles.keyBasic, styles.pediatricKeyId]}>{ pediatricKeyId }</Text>
        ) : (
          <View></View>
        )
      }
      <View style={styles.linkWrapper}>
        {
          keyId ? (
            <Link
              style={styles.linkToAlgo}
              href={{
                pathname: '/algo/[key]',
                params: { key: keyId, pages: pages[0]}
              }}>
            </Link>
          ) : ('')
        }
        {
          pediatricKeyId ? (
            <Link
              style={styles.linkToAlgo}
              href={{
                pathname: '/algo/[key]',
                params: { key: pediatricKeyId, pages: pages[1]}
              }}
            >
            </Link>
          ) : ('')
        }
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    padding: 5,
    position: 'relative',
  },
  keyBasic: {
    flexBasis: 50,
    flexGrow: 0,
    flexShrink: 0,
    height: 50,
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  keyId: {
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 1,
  },
  pediatricKeyId: {
    backgroundColor: 'pink',
    borderColor: 'black',
    borderWidth: 1,
  },
  titleContainer: {
    flex: 1,
    textAlignVertical: 'center',
    paddingHorizontal: 10,
    fontSize: 20,
    display: 'flex',
  },
  linkWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  linkToAlgo: {
    flex: 1,
  }
})