import React from 'react';
import {InnerView, OuterView, Title} from './SOSButton.styles';
import {TouchableOpacityProps} from 'react-native';

export const SOSButton = (props: TouchableOpacityProps) => {
  return (
    <OuterView {...props}>
      <InnerView>
        <Title>{'SOS'}</Title>
      </InnerView>
    </OuterView>
  );
};
