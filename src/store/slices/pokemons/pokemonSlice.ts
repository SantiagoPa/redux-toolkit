import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonState {
  page: number;
  pokemons: Pokemon[];
  isLoading: boolean;
}

export interface Action {
  nextPage: number;
  pokemons: Pokemon[];
}

const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action:PayloadAction<Action>) => {
        state.isLoading = false;
        state.page = action.payload.nextPage;
        state.pokemons = action.payload.pokemons;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

