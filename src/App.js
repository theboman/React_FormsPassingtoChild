import React, { useState } from "react";
import "./styles.css";

import Child from "./components/Child";

export default function App() {
  // initial state
  const intialState = {
    firstName: "",
    lastName: ""
  };

  // hooks

  const [nameDB, setNameDB] = useState({
    firstName: "",
    lastName: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // functions
  const handleInput = e => {
    const value = e.target.value;
    const name = e.target.name;
    setNameDB({ ...nameDB, [name]: value });
  };

  const handlerSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handlerResetState = () => {
    setNameDB(intialState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          -- This is Test -- <br /> -- Create React App --
        </h1>

        <form onSubmit={handlerSubmit}>
          <div className="inputbox">
            <input
              type="text"
              placeholder="First Name"
              value={nameDB.firstName}
              name="firstName"
              onChange={handleInput}
            />
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={nameDB.lastName}
                name="lastName"
                onChange={handleInput}
              />
            </div>

            <div className="submit">
              <input type="submit" value="SUBMIT" />
            </div>
          </div>
        </form>
        {submitted ? (
          <Child userNames={nameDB} reset={handlerResetState} />
        ) : (
          ""
        )}
      </header>
    </div>
  );
}
