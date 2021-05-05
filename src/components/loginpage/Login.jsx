import React, { useState, useEffect } from "react";
import './Login.css';

function Login() {
  const [user, setUser] = useState({ id: "", pass: "" });
  useEffect(() => {
    if (user.id === "" || user.pass === "") {
      document.getElementById("btn-login").classList.add("disabled");
    }
    else {
      document.getElementById("btn-login").classList.remove("disabled");
    }
  })
  function HandleLogin() {
    console.log("Clicked");
    if (user.id === "admin" && user.pass === "admin") {
      document.getElementById("btn-login").href = "/home";
    }
    else {
      alert("The username or password is incorrect\nadmin\nadmin");
      document.getElementById("btn-login").href = "#";
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser(prevValue => {
      if (name === "id") {
        return {
          id: value,
          pass: prevValue.pass
        };
      } else if (name === "pass") {
        return {
          id: prevValue.id,
          pass: value
        };
      }
    });
  }
  return (
    <div className="login-form w-300">
      <i className="fab fa-twitter login-icon"></i>
      <h3>Log in to Twitter</h3>
      <div className="form-floating w-300">
        <input onChange={handleChange} className="form-control" type="text" name="id" id="floatingID2" placeholder="name@example.com" autoFocus />
        <label className="form-label" htmlFor="floatingID2">Phone, email, or username</label>
      </div>
      <div className="form-floating w-300">
        <input onChange={handleChange} className="form-control" type="password" name="pass" id="floatingPass2" placeholder="password" />
        <label className="form-label" htmlFor="floatingPass2">Password</label>
      </div>
      <a href="#" onClick={HandleLogin} id="btn-login" className="w-300 btn-primary">Log in</a>
      <div className="w-300 center login-a">
        <a href="#">Forgot password?</a>
        <a href="/signup">Sign up for Twitter</a>
      </div>
    </div>
  );
}
export default Login;