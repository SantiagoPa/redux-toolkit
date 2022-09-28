import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo, ITodosState } from '../slices/todos';

export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery:  fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder)=>({
        getTodos: builder.query<ITodo[], void>({
            query: () => '/todos'
        }),

        getTodo: builder.query<ITodo, number>({
            query: (todoId) => `/todos/${todoId}`
        }),
    }),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;