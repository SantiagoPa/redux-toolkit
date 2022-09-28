import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/api";

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1)
  // const { isLoading, data: todos } = useGetTodosQuery();
  const { isLoading, data: todo } = useGetTodoQuery(todoId);

  const prevTodo = () => {
    if(todoId === 1) return;
    setTodoId(prev=>prev-1);
  }

  return (
    <div className="text-white text-3xl">
      <div className="grid grid-cols-1 place-items-center pt-24">
        <h1>Todo - RTK Query</h1>
        <span className="px-5 py-2 rounded-xl bg-purple-800 text-white text-base absolute top-4 right-4">
          Status: {isLoading ? "loading..." : "done"}{" "}
        </span>
        <hr />
        {/* <ul className="text-base m-12 grid grid-cols-3 gap-3 lg:grid-cols-5">
            {  todos?.map(({ title, completed, id})=>(
                <li className="bg-white text-purple-800 flex flex-col rounded-lg text-center justify-center hover:bg-purple-900 hover:text-white cursor-default p-3" key={id}>
                    <span>{title}</span>
                    <span>status: <strong>{completed ? 'done' : 'pending'}</strong></span>
                </li>
            )) }
        </ul> */}

        <div
          className="bg-white text-purple-800 flex flex-col rounded-lg text-lg text-center justify-center hover:bg-purple-900 hover:text-white cursor-default p-3"
          key={todo?.id}
        >
          <span>{todo?.title}</span>
          <span>
            status: <strong>{todo?.completed ? "done" : "pending"}</strong>
          </span>
        </div>

        <button 
        onClick={()=>setTodoId(todoId=>todoId+1)}
        className="my-2 rounded-lg text-base px-5 py-3 bg-purple-800 text-white hover:ring-2 hover:bg-slate-900 hover:ring-purple-900 fixed left-2 top-[50vh]">
          Next page
        </button>
        <button 
        onClick={()=>prevTodo()}
        className="my-2 rounded-lg text-base px-5 py-3 bg-purple-800 text-white hover:ring-2 hover:bg-slate-900 hover:ring-purple-900 fixed left-2 top-[60vh]">
          Prev page
        </button>
      </div>
    </div>
  );
};
