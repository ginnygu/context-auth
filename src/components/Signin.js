import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    //You will make ajax (axios) call to the backend
    dispatch({
      type: "LOGIN",
      email: email,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Signin;
