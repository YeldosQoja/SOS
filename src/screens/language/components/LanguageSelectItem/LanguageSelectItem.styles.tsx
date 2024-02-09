import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{
  $borderColor?: string;
  $selected: boolean;
}>`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin: 12px;
  margin-bottom: 0px;
  border-color: ${({$borderColor, $selected, theme: {gray, main}}) => {
    if (!$selected) {
      return gray;
    }
    if ($borderColor) {
      return $borderColor;
    }
    return main;
  }};
  border-width: 1.15px;
  border-radius: 8px;
`;

export const StyledImage = styled.Image`
  height: 25px;
  width: 38px;
  border-radius: 8px;
  margin-right: 8px;
  shadow-color: ${({theme: {text}}) => text};
  shadow-opacity: 0.15;
  shadow-offset: 1px 2px;
  shadow-radius: 4px;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${({theme: {text}}) => text};
  font-size: 15px;
  font-weight: 500;
`;

export const LocalLanguageSpell = styled.Text`
  color: ${({theme: {darkGray}}) => darkGray};
  font-size: 13px;
  font-weight: 500;
`;
