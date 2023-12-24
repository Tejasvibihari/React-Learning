import React from "react";
import Login from "./Login";
import Register from "./Register";

var userIsRegistered = false;

function App() {

  if (userIsRegistered === true) {
    return (<div className="container">
      <Login />
    </div>);
  } else {
    return (
      <div className="container">
        <Register />
      </div>
    );
  }
}

export default App;
