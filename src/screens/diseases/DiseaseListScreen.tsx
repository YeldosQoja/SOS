import {FlatList, ListRenderItem, View} from 'react-native';
import React from 'react';
import {SearchInput} from '../../components';
import {DiseaseListItem} from './components';

const data = ['Абсцесс легкого', 'Диарея', 'Простота', ''];

const DiseaseListScreen = () => {
  const renderItem: ListRenderItem<string> = ({item}) => (
    <DiseaseListItem name={item} />
  );

  return (
    <View>
      <SearchInput placeholder="Поиск болезней" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DiseaseListScreen;
