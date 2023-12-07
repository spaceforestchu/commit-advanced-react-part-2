import React, { useContext, createContext, useReducer, useState } from "react";
import "./App.css";

function randomNumberGenerator() {
  return Math.floor(Math.random() * 1000000000) + 1;
}

const initialState = {
  todos: [
    { todo: "buy food", id: randomNumberGenerator() },
    { todo: "buy sneakers", id: randomNumberGenerator() },
    { todo: "buy a house", id: randomNumberGenerator() },
  ],
  randomNumberGenerator: randomNumberGenerator(),
};

const ACTIONS = {
  CREATE_TODO: "CREATE_TODO",
  DELETE_TODO: "DELETE_TODO",
};

function todosReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.CREATE_TODO:
      let newTodo = {
        todo: payload,
        id: randomNumberGenerator(),
      };
      let newTodosArray = [...state.todos, newTodo];

      return { ...state, todos: newTodosArray };
    case ACTIONS.DELETE_TODO:
      let newTodos = state.todos.filter((item) => item.id !== payload);

      return { ...state, todos: newTodos };
    default:
      return state;
  }
}

const UserContext = createContext();

function UserContextComponent({ children }) {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function Todos() {
  const { dispatch } = useContext(UserContext);

  const [todos, setTodos] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "CREATE_TODO",
      payload: todos,
    });
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        {" "}
        <input type="text" onChange={(e) => setTodos(e.target.value)} />
      </div>
      <button>Submit</button>
    </form>
  );
}

function TodoList() {
  const {
    state: { todos },
    dispatch,
  } = useContext(UserContext);

  function handleDeleteById(id) {
    dispatch({ type: "DELETE_TODO", payload: id });
  }

  return (
    <div style={{ marginTop: 5 }}>
      {todos.map((item) => {
        return (
          <div key={item.id} style={{ marginTop: 10 }}>
            {item.todo}{" "}
            <button onClick={() => handleDeleteById(item.id)}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <UserContextComponent>
      <Todos />
      <TodoList />
    </UserContextComponent>
  );
}

export default App;
