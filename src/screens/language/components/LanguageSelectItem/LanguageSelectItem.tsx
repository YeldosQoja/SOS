import React from 'react';
import {
  Container,
  LocalLanguageSpell,
  StyledImage,
  Title,
} from './LanguageSelectItem.styles';

interface Props {
  selected: boolean;
  highlightColor?: string;
  imageSource: ReturnType<typeof require>;
  spell: string;
  title: string;
  onSelect: () => void;
}

export const LanguageSelectItem = ({
  selected,
  imageSource,
  title,
  spell,
  highlightColor,
  onSelect,
}: Props) => {
  return (
    <Container
      onPress={onSelect}
      $selected={selected}
      $borderColor={highlightColor}>
      <StyledImage source={imageSource} resizeMode="cover" />
      <Title>{title}</Title>
      <LocalLanguageSpell>{`(${spell})`}</LocalLanguageSpell>
    </Container>
  );
};
