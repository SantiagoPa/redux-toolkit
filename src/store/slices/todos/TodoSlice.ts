import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

export interface ITodosState {
  isLoading: boolean;
  todos: ITodo[],

}

const initialState: ITodosState = {
  isLoading: false,
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {    
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.counter += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const {  } = todosSlice.actions