import React from "react";

import CustomeUseFetch from "./hooks/CustomUseFetch";

import "./App.css";

function App() {
  const [
    { isLoading, response, error },
    setResponse,
    removeLocalStorage,
    doFetch,
  ] = CustomeUseFetch();

  if (isLoading) {
    return <div>..Logging IN</div>;
  }

  if (error) {
    return <div>...error logging in</div>;
  }

  if (response) {
    alert(response.username);
  }

  return (
    <div>
      <h1>Local storage</h1>
      <button
        onClick={() =>
          doFetch(
            "https://dummyjson.com/auth/login",
            {
              username: "kminchelle",
              password: "0lelplR",
            },
            { method: "POST" }
          )
        }
      >
        {!response ? "Login" : response.username}
      </button>
      <button
        style={{ backgroundColor: "black", color: "white" }}
        onClick={() => {
          setResponse(null);
          removeLocalStorage("token");
          alert("Token has been removed");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
