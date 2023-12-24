import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StarIconContainer = styled.View`
  margin-right: 2px;
`;

const RatingTitle = styled.Text`
  font-size: 14px;
  margin-left: 2px;
  color: ${({theme: {text}}) => text};
`;

interface Props {
  rating: number;
}

export const Rating = ({rating}: Props) => {
  const theme = useTheme();
  return (
    <Container>
      {Array.from({length: 5}, (_, i) => i + 1).map(index => (
        <StarIconContainer key={index}>
          {index <= rating ? (
            <MaterialIcon name="star" size={20} color={theme.rating} />
          ) : index - rating < 1 ? (
            <MaterialIcon name="star-half" size={20} color={theme.rating} />
          ) : (
            <MaterialIcon name="star-outline" size={20} color={theme.rating} />
          )}
        </StarIconContainer>
      ))}
      <RatingTitle>{rating}</RatingTitle>
    </Container>
  );
};
