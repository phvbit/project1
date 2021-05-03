import React from "react";
import ReactDOM from 'react-dom';

import Footer from "./Footer";
import footerItems from "./footerItems.js";
import CreateNew from "../createNewAccount/CreateNew";

import './StartPage.css';
function Home() {
  function HandleSignUp() {
    const element = (
      <CreateNew />
    );
    ReactDOM.render(element, document.getElementById("popup-signin"));

  }
  return (
    <div id="start-page">
      <div id="popup-signin"></div>
      <div>
        <div className="start-page-top-container d-flex">
          <div className="start-page-top-l d-flex js-center align-bl">
            <i className="fab fa-twitter top-l-icon"></i>
          </div>
          <div className="start-page-top-r">
            <div className="d-flex align-bl">
              <div className="form-floating w-180px">
                <input className="form-control" type="text" name="" id="floatingID" placeholder="name@example.com" autoFocus />
                <label className="form-label" htmlFor="floatingID">Phone, email, or username</label>
              </div>
              <div className="form-floating w-180px">
                <input className="form-control" type="password" name="" id="floatingPass" placeholder="password" />
                <label className="form-label" htmlFor="floatingPass">Password</label>
              </div>
              <a className="w-100px btn-outline-primary btn-login">Log in</a>
            </div>
            <i className="fab fa-twitter t-icon"></i>
            <h1>Happening now</h1>
            <h3>Join Twitter today.</h3>
            <div id="start-page-btn">
              <a onClick={HandleSignUp} className="w-300 btn-primary">Sign up</a>
              <br />
              <a href="/login" className="w-300 btn-outline-primary">Log in</a>
            </div>
          </div>
        </div>
      </div>
      <div id="startpage-footer">
        <div className="d-flex align-bl js-center">
          {footerItems.map(item => (
            <Footer
              key={item.id}
              name={item.name}
              href={item.href}
            />
          ))}
          <span>© 2021 Twitter, Inc.</span>
        </div>
      </div>
    </div>
  );
}
export default Home;