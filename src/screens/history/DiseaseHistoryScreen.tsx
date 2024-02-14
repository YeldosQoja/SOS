import {View, FlatList, ListRenderItem} from 'react-native';
import React, {useEffect} from 'react';
import {DiseaseListItem} from './components';
import {Navigation, NavigationProps} from 'react-native-navigation';
import {selectLanguage} from '@slices';
import {useAppSelector} from '@hooks';
import {useTranslation} from 'react-i18next';

const DiseaseHistoryScreen = ({componentId}: NavigationProps) => {
  const language = useAppSelector(selectLanguage);
  const {t} = useTranslation();

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      bottomTab: {
        text: t('bottom_bar_buttons.history'),
      },
    });
  }, [language, componentId, t]);

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
