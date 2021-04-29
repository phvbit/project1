import React, { useState } from "react";
import './CreateNew.css';
import monthList from "./date";

function CreateNew() {
  const [getMonth, setMonth] = useState("");
  const [useInstead, setInstead] = useState("true");
  console.log(getMonth);
  console.log(useInstead);
  var isFeb;
  function UseInstead() {
    setInstead(!useInstead);
  }
  if (getMonth === "feb") {
    isFeb = true;
  }
  else {
    isFeb = false;
  }

  function ChangeMonth(event) {
    const month = event.target.value;
    setMonth(month);
  }

  return (
    <div className="signup-container d-flex js-center align-bl">
      <div className="create-new">
        <div className="d-flex align-bl justify-content-end">
          <i className="fab fa-twitter login-icon"></i>
          <button id="btn-next" disabled className="btn btn-primary btn-create">Next</button>
        </div>
        <h3>Create your account</h3>
        <div className="form-floating">
          <input className="form-control" type="text" name="name" id="create-name" placeholder="name@example.com" autoFocus />
          <label className="form-label" htmlFor="create-name">Name</label>
        </div>
        <div className="form-floating">
          <input className="form-control" type="text" name="contact" id="create-phone" placeholder="password" />
          <label className="form-label" htmlFor="create-phone">{useInstead ? "Phone" : "Email"}</label>
        </div>
        <a onClick={UseInstead} id="use-instead" href="#">{useInstead ? "Use email instead" : "Use phone instead"}</a>
        <strong><p>Date of birth</p></strong>
        <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
        <div className="birth-sel d-flex">
          <div className="form-floating">
            <select onChange={ChangeMonth} className="form-select" name="month" id="#month-sel">
              <option value="">Month</option>
              {monthList.map(item => (
                <option key={item.id} value={item.value}>{item.month}</option>
              ))}

            </select>
            <label className="form-label" htmlFor="month-sel">Month</label>
          </div>
          <div className="form-floating">
            <select className="form-select" name="date" id="#date-sel">
              <option value="">Date</option>
              {isFeb && (
                <option value="28">28</option>
              )}
            </select>
            <label className="form-label" htmlFor="date-sel">Date</label>
          </div>
          <div className="form-floating">
            <select className="form-select" name="year" id="#year-sel">
              <option value="">Year</option>
              <option value="2002">2002</option>

            </select>
            <label className="form-label" htmlFor="year-sel">Year</label>
          </div>
        </div>
      </div>

    </div>

  );
}
export default CreateNew;