import React from "react";
import './UserPopUp.css';

function UserPopUp() {
  return (
    <div id="popup" className="popup">
      <div className="inner">
        <ul>
          <li className="d-flex js-btw align-bl">
            <div className=" d-flex align-bl">
              <i className="fas fa-user"></i>
              <div>
                <strong>Bit</strong>
                <br />
                <span className="text-muted">@khai.phv</span>
              </div>
            </div>
            <i style={{ color: "#1DA1F2" }} className="fas fa-check"></i>
          </li>
          <li>Add an existing account</li>
          <li>Log out @khai_phv</li>
        </ul>
      </div>
    </div>


  );
}
export default UserPopUp;