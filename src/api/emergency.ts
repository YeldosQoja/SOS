import {EmergencyApplication, EmergencyRequest, Crew} from '@types';
import {api} from './api';

export const emergencyApi = api.injectEndpoints({
  endpoints: build => ({
    createRequest: build.mutation<EmergencyApplication, EmergencyRequest>({
      query: args => ({
        url: 'create/call',
        method: 'POST',
        body: args,
      }),
    }),
    checkRequest: build.query<EmergencyApplication & Crew, number>({
      query: userId => `check/call/status/${userId}`,
    }),
    getRequestHistory: build.query<(EmergencyApplication & Crew)[], number>({
      query: userId => `show/history/${userId}`,
    }),
  }),
});
