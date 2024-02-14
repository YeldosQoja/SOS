import {api} from './api';
import {UserDTO, UserPreview} from '@types';

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    signin: build.mutation<string, {phone: string; smsCode: string}>({
      query: ({phone, smsCode}) => ({
        url: 'login/oauth/token',
        method: 'POST',
        body: {
          phone,
          sms_code: smsCode,
        },
      }),
      transformResponse: (response: {token: string}) => response.token,
    }),
    signup: build.mutation<UserDTO, UserPreview & {smsCode: string}>({
      query: ({smsCode, ...user}) => ({
        url: 'signup',
        method: 'POST',
        body: {
          sms_code: smsCode,
          ...user,
        },
      }),
      transformResponse: (response: {registered_user: UserDTO}) => {
        console.log(response);
        return response.registered_user;
      },
      transformErrorResponse: (error: unknown) => {
        console.log(error);
        return error;
      },
    }),
    sendSms: build.mutation<{id: string; cnt: string}, string>({
      query: phone => ({
        url: 'send/sms',
        method: 'POST',
        body: {
          phone,
        },
      }),
    }),
  }),
});

export const {useSigninMutation, useSignupMutation, useSendSmsMutation} =
  authApi;
