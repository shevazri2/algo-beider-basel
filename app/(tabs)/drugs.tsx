import { FlatList, StyleSheet, View, Text } from 'react-native';

import {  AppData } from '@/constants/Data';
import { DrugListItem } from '@/components/DrugListItem';

export default function DrugsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={AppData.drugs}
        renderItem={({item}) => <DrugListItem title={item.title} page={item.page} categories={item.categories} />}
        keyExtractor={(item, index) => item.title + index}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 11,
  }
});

