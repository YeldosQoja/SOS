import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: white;
  align-items: flex-start;
  margin: 8px;
  margin-top: 0px;
  border-radius: 12px;
  padding: 12px;
  shadow-color: ${({theme: {text}}) => text};
  shadow-opacity: 0.15;
  shadow-offset: 1px 2px;
  shadow-radius: 4px;
  elevation: 5;
`;

export const HospitalName = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: ${({theme: {text}}) => text};
  margin-bottom: 4px;
`;

export const HosptialKind = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: ${({theme: {gray}}) => gray.light};
  margin-bottom: 8px;
`;

export const ReviewContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: -1px;
  margin-bottom: 8px;
`;

export const ReviewCount = styled.Text`
  font-size: 14px;
  color: ${({theme: {gray}}) => gray.light};
  margin-left: 8px;
`;

export const AddressName = styled.Text`
  font-size: 15px;
  color: ${({theme: {text}}) => text};
`;

export const Status = styled.Text<{$color: string}>`
  font-size: 15px;
  color: ${({$color}) => $color};
  margin-top: 12px;
`;
