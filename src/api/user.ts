import {User, UserPreview} from '@types';
import {api} from './api';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    getUser: build.query<User, undefined>({
      query: () => 'get/user/jwt',
      transformResponse: (response: {user: User}) => response.user,
    }),
    changeProfileData: build.mutation<string, UserPreview & {userId: number}>({
      query: ({userId, ...rest}) => ({
        url: `change/${userId}/userdata`,
        method: 'POST',
        body: rest,
      }),
      transformResponse: (response: {message: string}) => response.message,
    }),
  }),
});

export const {useGetUserQuery, useChangeProfileDataMutation} = userApi;
