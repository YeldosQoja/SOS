import {View, FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import {DiseaseListItem} from './components';

const DiseaseHistoryScreen = props => {
  const renderItem: ListRenderItem<{}> = ({item, index}) => {
    return <DiseaseListItem />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={Array(10).fill({})}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default DiseaseHistoryScreen;
