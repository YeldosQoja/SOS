import {ActivityIndicator, Modal} from 'react-native';
import React from 'react';
import {Container} from './Overlay.styles';
import {useTheme} from 'styled-components/native';

interface Props {
  visible: boolean;
}

export const Overlay = ({visible}: Props) => {
  const theme = useTheme();
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <Container>
        <ActivityIndicator color={theme.white} size="large" />
      </Container>
    </Modal>
  );
};
