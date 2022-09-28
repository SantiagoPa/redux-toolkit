import { pokemonApi } from "../../../api/pokemonApi";
import { AppDispatch } from "./../../store";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page?: number) => {

  return async (dispatch: AppDispatch, getState: any) => {
    dispatch(startLoadingPokemons());
    //TODO Http Request
    // const response = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${
    //     page ? 0 * 10 : page! * 10
    //   }`
    // );
    // const data = await response.json();
    
    const response = await pokemonApi.get(`pokemon?limit=10&offset=${page ? page * 10 : 0 * 10}`);
    const { results } = response.data;
    console.log(response);

    dispatch( setPokemons({ pokemons: results, nextPage: page ? page + 1 : 1 }) );
  };
};
