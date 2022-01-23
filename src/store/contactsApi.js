import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61ec28a1f3011500174d20d4.mockapi.io/api',
  }),
  endpoints: builder => ({
    getContact: builder.query({
      query: id => `/contacts/${id}`,
    }),
  }),
});

export const { useGetContactQuery } = contactsApi;

//test
