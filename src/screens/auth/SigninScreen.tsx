import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import {useSigninMutation} from '@api';
import {InferType, object, string} from 'yup';
import {MaskInput, Overlay, PrimaryButton} from '@components';
import {useTranslation} from 'react-i18next';
import {Navigation, NavigationProps} from 'react-native-navigation';
import {useAppDispatch, useAppSelector} from '@hooks';
import {selectLanguage, selectUser, userLoggedIn} from '@slices';
import {ContainerView} from './components';
import Toast from 'react-native-toast-message';
import {mainRoot} from '@navigation';

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

const SigninFormSchema = object({
  phone: string()
    .matches(/\+7|8\d{10}/g, '')
    .required(),
});

type SigninForm = InferType<typeof SigninFormSchema>;

const SigninScreen = ({componentId}: NavigationProps) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [signin] = useSigninMutation();
  const {t} = useTranslation('auth');
  const language = useAppSelector(selectLanguage);
  const {code: smsCode, user} = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  console.log('sms code', smsCode, 'user', user);

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: t('signin_header'),
        },
      },
    });
  }, [language, componentId, t]);

  const handleSignin = async ({phone}: SigninForm) => {
    if (smsCode === null) {
      return;
    }
    try {
      const result = await signin({phone, smsCode}).unwrap();
      Navigation.setRoot(mainRoot);
      dispatch(userLoggedIn(result as string));
    } catch (error) {
      Toast.show({
        text1: error.error,
        type: 'error',
      });
    }
  };

  // const navigateToSignup = () => {
  //   Navigation.push(componentId, {
  //     component: {
  //       name: ScreenName.Signup,
  //     },
  //   });
  // };

  return (
    <ContainerView>
      <Formik
        initialValues={{phone: user ? user.phone : ''}}
        validationSchema={SigninFormSchema}
        onSubmit={handleSignin}
        validateOnBlur={true}>
        {({values, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
          <View>
            <MaskInput
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
            {/* <TextButton
              title={t('I do not have an account')}
              onPress={navigateToSignup}
            /> */}
            <PrimaryButton title={t('signin')} onPress={() => handleSubmit()} />
            <Overlay visible={isSubmitting} />
          </View>
        )}
      </Formik>
    </ContainerView>
  );
};

export default SigninScreen;
