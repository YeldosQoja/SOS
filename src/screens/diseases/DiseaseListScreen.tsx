import {FlatList, ListRenderItem, View} from 'react-native';
import React, {useEffect} from 'react';
import {SearchInput} from '../../components';
import {DiseaseListItem} from './components';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';

const data = ['Абсцесс легкого', 'Диарея', 'Простота', ''];

interface Props {
  onSelectDiseaseItem: (id: number, title: string) => void;
}

const DiseaseListScreen: NavigationFunctionComponent<Props> = ({
  componentId,
  onSelectDiseaseItem,
}) => {
  useEffect(() => {}, []);

  const handleDiseaseItemClick = async (title: string) => {
    await Navigation.dismissModal(componentId);
    onSelectDiseaseItem(1, title);
  };

  const renderItem: ListRenderItem<string> = ({item}) => (
    <DiseaseListItem name={item} onPress={() => handleDiseaseItemClick(item)} />
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
