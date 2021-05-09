import React, { useEffect, useState } from "react";
import './SignUp.css';
import monthList from "./date";
import yearList from "./year";


function SignUp() {
  const [useInstead, setInstead] = useState("true");
  function UseInstead() {
    setInstead(!useInstead);
  }

  const [isLeapYear, setIsLeapYear] = useState(false);
  function ChangeYear(event) {
    const year = event.target.value;
    if (year % 400 === 0) {
      setIsLeapYear(true);
    }
    else if (year % 4 === 0 && year % 100 !== 0) {
      setIsLeapYear(true);
    }
    else {
      setIsLeapYear(false);
    }
  }

  const [getMonth, setMonth] = useState("");
  function ChangeMonth(event) {
    const month = event.target.value;
    setMonth(month);
  }
  useEffect(() => {
    if (['apr', 'jun', 'sep', 'nov'].includes(getMonth)) {
      setEndDate(30);
    }
    else if (getMonth === 'feb') {
      if (isLeapYear) {
        setEndDate(28);
      }
      else {
        setEndDate(29);
      }
    }
    else {
      setEndDate(31);
    }
  }, [getMonth, isLeapYear])

  const [endDate, setEndDate] = useState();
  var dateList = [];
  var date = 1;
  while (date <= endDate) {
    dateList.push(date);
    date ++;
  }


  return (
    <div className="signup-container d-flex js-center align-bl">
      <div className="create-new">
        <div className="d-flex align-bl justify-content-end">
          <i className="fab fa-twitter login-icon"></i>
          <a id="btn-next" className="btn-primary">Next</a>
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
        <p style={{color: "#1DA1F2"}} onClick={UseInstead} id="use-instead" href="#">{useInstead ? "Use email instead" : "Use phone instead"}</p>


        {/* Date select */}
        <strong><p>Date of birth</p></strong>
        <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
        <div className="birth-sel d-flex">
          <div className="form-floating">
            <select onChange={ChangeMonth} className="form-select" name="month" id="#month-sel">
              <option value="">Select Month</option>
              {monthList.map(item => (
                <option key={item.id} value={item.value}>{item.month}</option>
              ))}

            </select>
            <label className="form-label" htmlFor="month-sel">Month</label>
          </div>
          <div className="form-floating">
            <select className="form-select" name="date" id="#date-sel">
              <option value="">Select Date</option>
              {dateList.map(date => (
                <option key={date} value={date}>{date}</option>
              ))}
            </select>
            <label className="form-label" htmlFor="date-sel">Date</label>
          </div>
          <div className="form-floating">
            <select onChange={ChangeYear} className="form-select" name="year" id="#year-sel">
              <option value="">Select Year</option>
              { yearList.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <label className="form-label" htmlFor="year-sel">Year</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;