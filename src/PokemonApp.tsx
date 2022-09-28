import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useActions";
import { getPokemons } from "./store/slices/pokemons";

export const PokemonApp = () => {
  
  const { isLoading, page, pokemons } = useAppSelector(state => state.pokemons );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
  }, []);
  

  return (
    <div className="bg-slate-900 text-white h-screen w-full text-3xl">
      <div className="grid grid-cols-1 grid-rows-2 h-96 place-items-center pt-24">
        <h1>Pokemon App</h1>
        <span className="px-5 py-2 rounded-xl bg-purple-800 text-white text-base absolute top-4 right-4">Status: {  isLoading ?  'loading...' : 'done' } </span>
        <hr />
        <ul className="text-base m-12">
          { 
            pokemons.map(({ name }, idx) => (
              <li key={name+''+idx}>{name}</li>
            ))
          }
        </ul>
        <button 
        onClick={()=>dispatch(getPokemons(page))}
        className="mt-2 rounded-lg text-base px-5 py-3 bg-purple-800 text-white hover:ring-2 hover:bg-transparent hover:ring-purple-900">
          Next page
        </button>
      </div>
    </div>
  );
  
};
