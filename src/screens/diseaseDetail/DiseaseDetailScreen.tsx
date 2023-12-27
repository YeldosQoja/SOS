import {Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DiseasePropertyListItem} from './components';
import {
  NavigationFunctionComponent,
  NavigationProps,
} from 'react-native-navigation';
import {appTheme} from '../../theme';

const properties = [
  {
    id: 1,
    title: 'Симптомы',
  },
  {
    id: 2,
    title: 'Причины',
  },
  {
    id: 3,
    title: 'Диагностика',
  },
  {
    id: 4,
    title: 'Классификация абсцессов легких',
  },
  {
    id: 5,
    title: 'Лечение абсцесса легкого в ФНКЦ',
  },
];

interface Props {
  disease: {
    id: number;
    title: string;
  };
}

const DiseaseDetailScreen: NavigationFunctionComponent<Props> = ({}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.description}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lacus vitae dui cursus maximus non eu nisl. Curabitur tincidunt non ex in pulvinar. Nam ante leo, dignissim vel ornare nec, pharetra sed est. Vestibulum commodo sapien eu nulla convallis commodo. Integer turpis sem, dictum sit amet nibh sit amet, pulvinar rhoncus felis. Pellentesque luctus felis vehicula arcu faucibus eleifend. Ut vehicula, est a malesuada finibus, eros diam tincidunt mi, vitae tempus odio quam ut ipsum. Pellentesque egestas elementum semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut rhoncus ac tellus eget tristique.'
        }
      </Text>
      {properties.map(p => (
        <DiseasePropertyListItem
          key={p.id}
          icon={<MaterialIcons name="help-outline" color="white" size={26} />}
          title={p.title}
        />
      ))}
    </ScrollView>
  );
};

DiseaseDetailScreen.options = ({disease}: Props & NavigationProps) => ({
  topBar: {
    title: {
      color: appTheme.text,
      text: disease.title,
    },
    backButton: {
      color: appTheme.text,
    },
    background: {
      clipToBounds: true,
      color: 'white',
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {
    padding: 12,
  },
});

export default DiseaseDetailScreen;
