import React, {useEffect, useRef, useState} from 'react';
import {ContainerView} from './components';
import {MaskInput, Overlay, PrimaryButton} from '@components';
import {useFormik} from 'formik';
import {Keyboard, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {InferType, object, string} from 'yup';
import {Navigation, NavigationProps} from 'react-native-navigation';
import {useSendSmsMutation} from '@api';
import Toast from 'react-native-toast-message';
import {ScreenName} from '@types';

const phoneNumberMask = [
  '+',
  '7',
  ' ',
  '(',
  /\d/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

const FormSchema = object({
  phone: string()
    .min(phoneNumberMask.length, 'phone_field_not_valid')
    .required(),
});
type FormValues = InferType<typeof FormSchema>;

const AuthLaunchScreen = ({componentId}: NavigationProps) => {
  const [inputFocused, setInputFocused] = useState(false);
  const {t} = useTranslation('auth');
  const phoneInputRef = useRef<TextInput>(null);
  const [sendSms, {isLoading, isError, error, isSuccess, data}] =
    useSendSmsMutation();

  console.log(data);

  const handleContinue = (values: FormValues) => {
    sendSms(values.phone);
  };

  const {values, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {phone: ''},
    onSubmit: handleContinue,
    validateOnChange: false,
    validationSchema: FormSchema,
  });

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: t('welcome'),
        },
      },
    });
    Keyboard.addListener('keyboardWillHide', () => {
      phoneInputRef.current?.blur();
    });
  }, [componentId, t]);

  if (isSuccess) {
    Navigation.push(componentId, {
      component: {
        name: ScreenName.Signup,
        passProps: {
          phone: values.phone,
        },
        options: {
          topBar: {
            backButton: {
              popStackOnPress: true,
            },
          },
        },
      },
    });
  } else if (isError && error) {
    console.log(error);
    Toast.show({text1: error.data.error, type: 'error'});
  }

  return (
    <ContainerView>
      <MaskInput
        ref={phoneInputRef}
        value={values.phone}
        onChangeText={handleChange('phone')}
        mask={phoneNumberMask}
        onFocus={() => setInputFocused(true)}
        onBlur={e => {
          handleBlur('phone')(e);
          setInputFocused(false);
        }}
        $focused={inputFocused}
      />
      <PrimaryButton
        title={t('continue')}
        onPress={() => {
          Keyboard.dismiss();
          handleSubmit();
        }}
        disabled={values.phone.length === 0}
      />
      <Overlay visible={isLoading} />
    </ContainerView>
  );
};

export default AuthLaunchScreen;
