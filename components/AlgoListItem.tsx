import { ThemeColors } from "@/constants/Colors";
import { Link } from "expo-router"
import { StyleSheet, Text, useColorScheme, View } from "react-native"

type Props = {
  title: string,
  keyId?: string,
  pediatricKeyId?: string,
  pages: Array<Array<number>>,
}

export function AlgoListItem({ title, keyId, pediatricKeyId, pages }: Props) {
  const colorScheme = useColorScheme();

  const themedListItem = colorScheme === 'light' ? styles.listItemLight : styles.listItemDark;
  const themedTitleContainer = colorScheme === 'light' ? styles.titleContainerLight : styles.titleContainerDark;

  return (
    <View style={[styles.listItem, themedListItem]}>
      { keyId ? (
        <Text style={[styles.keyBasic, styles.keyId]}>{keyId}</Text>
      ) : (
        <View style={styles.keyBasic}></View>
      )}
      <Text style={[styles.titleContainer, themedTitleContainer]}>{title}</Text>
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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    padding: 5,
    position: 'relative',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  listItemDark: {
    backgroundColor: ThemeColors.darkBlue,
    color: ThemeColors.white,
    borderColor: ThemeColors.black,
  },
  listItemLight: {
    backgroundColor: ThemeColors.lightBlue,
    color: ThemeColors.black,
    borderColor: ThemeColors.darkBlue
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
    backgroundColor: ThemeColors.tintYellow,
    borderColor: ThemeColors.tintYellowDark,
    borderWidth: 1,
  },
  pediatricKeyId: {
    backgroundColor: ThemeColors.tintRed,
    borderColor: ThemeColors.tintRedDark,
    borderWidth: 1,
  },
  titleContainer: {
    flex: 1,
    textAlignVertical: 'center',
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    display: 'flex',
  },
  titleContainerDark: {
    color: ThemeColors.white,
  },
  titleContainerLight: {
    color: ThemeColors.black,
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