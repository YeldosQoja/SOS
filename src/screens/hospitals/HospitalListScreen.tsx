import {View, FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import {HospitalListItem} from './components';
import {SearchInput} from '../../components';

const data = [
  {
    name: 'Городская клиническая больница',
    kind: 'Больницы',
    rating: 3.8,
    reviewCount: 387,
    address: 'Микрорайон Калкаман, 20, Алматы',
  },
  {
    name: 'Городская клиническая больница',
    kind: 'Больницы',
    rating: 3.8,
    reviewCount: 387,
    address: 'Микрорайон Калкаман, 20, Алматы',
  },
  {
    name: 'Городская клиническая больница',
    kind: 'Больницы',
    rating: 3.8,
    reviewCount: 387,
    address: 'Микрорайон Калкаман, 20, Алматы',
  },
  {
    name: 'Городская клиническая больница',
    kind: 'Больницы',
    rating: 3.8,
    reviewCount: 387,
    address: 'Микрорайон Калкаман, 20, Алматы',
  },
  {
    name: 'Городская клиническая больница',
    kind: 'Больницы',
    rating: 3.8,
    reviewCount: 387,
    address: 'Микрорайон Калкаман, 20, Алматы',
  },
  {
    name: 'Городская клиническая больница',
    kind: 'Больницы',
    rating: 3.8,
    reviewCount: 387,
    address: 'Микрорайон Калкаман, 20, Алматы',
  },
  {
    name: 'Городская клиническая больница',
    kind: 'Больницы',
    rating: 3.8,
    reviewCount: 387,
    address: 'Микрорайон Калкаман, 20, Алматы',
  },
];

const HospitalListScreen = () => {
  const renderItem: ListRenderItem<any> = ({
    item: {name, kind, rating, reviewCount, address},
  }) => (
    <HospitalListItem
      name={name}
      kind={kind}
      rating={rating}
      reviewCount={reviewCount}
      addressName={address}
      open
    />
  );

  return (
    <View>
      <SearchInput placeholder="Поиск больниц" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HospitalListScreen;
