import { useAppDispatch, useAppSelector } from "./hooks/useActions";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter";

import reactLogo from "./assets/react.svg";

function App() {
  const { counter } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="m-auto p-24 w-full grid grid-cols-1 grid-rows-3 place-items-center gap-3">
      <div className="flex flex-row gap-x-3">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>count is: {counter}</h1>
      <div className="card">
        <div className="flex flex-row gap-x-3">
          <button
            className="bg-slate-800 px-4 py-2 text-white rounded-lg ring-2 hover:ring-cyan-900 hover:bg-transparent hover:text-slate-900"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="bg-slate-800 px-4 py-2 text-white rounded-lg ring-2 hover:ring-cyan-900 hover:bg-transparent hover:text-slate-900"
            onClick={() => dispatch(decrement())}
          >
            decrement
          </button>
          <button
            className="bg-slate-800 px-4 py-2 text-white rounded-lg ring-2 hover:ring-cyan-900 hover:bg-transparent hover:text-slate-900"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            IncrementBy 5
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
