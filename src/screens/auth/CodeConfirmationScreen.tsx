import React, {useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {useTranslation} from 'react-i18next';

const CELL_COUNT = 4;

interface Props {
  phone: string;
}

const CodeConfirmationScreen: NavigationFunctionComponent<Props> = ({
  componentId,
  phone,
}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const theme = useTheme();
  const {t} = useTranslation('auth');

  const handleChangeText = (text: string) => {
    if (text.length === CELL_COUNT) {
      Keyboard.dismiss();
    }
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('code_confirmation', {phone})}</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        rootStyle={styles.codeFieldRoot}
        onChangeText={handleChangeText}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={{
              ...styles.cell,
              borderColor: isFocused ? theme.main : theme.gray.light,
            }}
            onLayout={getCellOnLayoutHandler(index)}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    padding: 12,
    paddingTop: 36,
    paddingBottom: 0,
  },
  codeFieldRoot: {
    marginTop: 50,
    width: 50 * CELL_COUNT + 12 * (CELL_COUNT - 1),
  },
  cell: {
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 3,
  },
  cellText: {
    fontSize: 35,
    textAlign: 'center',
  },
});

export default CodeConfirmationScreen;
