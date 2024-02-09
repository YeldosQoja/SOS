import {View, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import React, {useState} from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {PrimaryButton} from '../../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AddressListItem} from './components/AddressListItem/AddressListItem';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {useTranslation} from 'react-i18next';

const segmentButtonTranslationKeys = ['location', 'contacts'];
const addressData = [
  {
    icon: <MaterialIcons name="home" color="black" size={26} />,
    title: 'Дом',
    addressName: 'Алматы, Райымбек батыра',
  },
];

const MapScreen: NavigationFunctionComponent<{}> = () => {
  const {t} = useTranslation();
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(1);
  const segmentButtonLabels = segmentButtonTranslationKeys.map(btnLabel =>
    t(btnLabel),
  );

  const handleSegmentButtonSelect = (value: string) => {
    const index = segmentButtonLabels.findIndex(label => label === value);
    setSelectedSegmentIndex(index);
  };

  const handleMessageButton = () => {};

  const renderAddressItem: ListRenderItem<any> = ({item}) => {
    return (
      <AddressListItem
        selected={true}
        icon={item.icon}
        title={item.title}
        address={item.addressName}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SegmentedControl
        values={segmentButtonLabels}
        style={styles.segmentedControl}
        selectedIndex={selectedSegmentIndex}
        onValueChange={handleSegmentButtonSelect}
      />
      {selectedSegmentIndex === 0 ? (
        <View style={styles.mainView} />
      ) : (
        <FlatList
          contentContainerStyle={styles.mainView}
          data={addressData}
          renderItem={renderAddressItem}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
      <View style={styles.bottomView}>
        <PrimaryButton title={t('message')} onPress={handleMessageButton} />
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  segmentedControl: {
    height: 45,
  },
  mainView: {
    flex: 1,
    marginVertical: 16,
  },
  bottomView: {
    marginBottom: 0,
  },
});
