// api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface SignUpData {
    fullName: string;
    email: string;
    password: string;
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://travel-app-api.up.railway.app/api/v1/' }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data: SignUpData) => ({
                url: 'auth/sign-up',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            }),
        }),
    }),
});

export const { useSignUpMutation } = api;
