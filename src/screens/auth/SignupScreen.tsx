import {Keyboard, View} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from 'styled-components/native';
import {useFormik} from 'formik';
import {InferType, object, string} from 'yup';
import {Input, Overlay, PrimaryButton} from '@components';
import {useAppDispatch, useAppSelector, useFocus} from '@hooks';
import {useTranslation} from 'react-i18next';
import {useSignupMutation} from '@api';
import {saveCode, saveUser, selectLanguage} from '@slices';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {ContainerView} from './components';
import Toast from 'react-native-toast-message';
import {ScreenName, UserDTO} from '@types';

const SignupFormSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  address: string().required(),
  smsCode: string().required(),
});

type SignupForm = InferType<typeof SignupFormSchema>;

interface Props {
  phone: string;
}

const SignupScreen: NavigationFunctionComponent<Props> = ({
  componentId,
  phone,
}) => {
  const initialValues: SignupForm = {
    firstName: '',
    lastName: '',
    address: '',
    smsCode: '',
  };
  const [focusedInput, setFocusedInput] = useFocus<SignupForm>();
  const theme = useTheme();
  const {t} = useTranslation('auth');
  const [signup] = useSignupMutation();
  const language = useAppSelector(selectLanguage);
  const dispatch = useAppDispatch();

  const handleSignup = async ({
    firstName,
    lastName,
    address,
    smsCode,
  }: SignupForm) => {
    try {
      const result = await signup({
        name: firstName,
        surname: lastName,
        address,
        phone,
        smsCode,
      }).unwrap();
      Navigation.push(componentId, {
        component: {
          name: ScreenName.Signin,
        },
      });
      dispatch(saveUser(result as UserDTO));
      dispatch(saveCode(values.smsCode));
    } catch (error) {
      Navigation.push(componentId, {
        component: {
          name: ScreenName.Signin,
        },
      });
      Toast.show({
        text1: error.data.error,
        type: 'error',
      });
    }
  };

  const {values, handleChange, handleBlur, handleSubmit, isSubmitting} =
    useFormik({
      initialValues,
      validationSchema: SignupFormSchema,
      onSubmit: handleSignup,
    });

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: t('signup_header'),
        },
      },
    });
  }, [language, componentId, t]);

  return (
    <ContainerView>
      {
        <View>
          {Object.keys(values).map(value => {
            const formValue = value as keyof SignupForm;
            return (
              <Input
                key={value}
                onChangeText={handleChange(formValue)}
                onBlur={handleBlur(formValue)}
                onFocus={() => setFocusedInput(formValue)}
                placeholder={t(`placeholder.${formValue}`)}
                placeholderTextColor={theme.gray.dark}
                value={values[formValue]}
                $focused={focusedInput === formValue}
              />
            );
          })}
          <PrimaryButton
            title={t('continue')}
            onPress={() => {
              Keyboard.dismiss();
              handleSubmit();
            }}
          />
        </View>
      }
      <Overlay visible={isSubmitting} />
    </ContainerView>
  );
};

export default SignupScreen;
