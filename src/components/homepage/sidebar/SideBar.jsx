import React, { useState, useEffect } from "react";
import SideBarItem from "./SideBarItem";
import sideBarListItems from "./sideBarListItems.js";
import UserPopUp from "./UserPopUp";
import './SideBar.css';

function SideBar() {
  // show pop up
  const [isDisplay, setIsDisplay] = useState(false);
  useEffect(() => {
    function TooglePopUp() {
      if (!isDisplay) {
        setIsDisplay(true);
        document.getElementById("user-test").style.zIndex = "-1";

      }
      // else {
      //   document.getElementById("popup").classList.remove("show");
      //   setIsDisplay(false);
      // }
    }
    document.getElementById("user-test").addEventListener("click", TooglePopUp);
    isDisplay &&
      document.body.addEventListener("click", function() {
        document.getElementById("user-test").style.zIndex = "0";
        setIsDisplay(false);
      }, true);
  })
  // document.querySelector(".new-feed").style.zIndex = "-1";
  return (
    <div id="side-bar">
      <div className="side-bar d-flex d-flex-column js-btw">
        <div className="top-side-bar">
          <div className="side-bar-item">
            <a href="home" className="side-bar-home-icon d-flex js-center align-bl">
              <span className="fab fa-twitter"></span>
            </a>
          </div>
          {sideBarListItems.map(item => (

            <div className="side-bar-item">
              <SideBarItem
                key={item.id}
                href={item.href}
                iconClass={item.iconClass}
                iconName={item.iconName}
              />
            </div>
          ))}

          <button className="btn w-90 btn-twitter">Tweet</button>
        </div>
        <div className="trigger">
          {isDisplay && <UserPopUp />} 
          <a id="user-test" className="bottom-side-bar d-flex align-bl js-btw">
            <div className=" d-flex align-bl">
              <i class="fas fa-user"></i>
              <div>
                <strong>Bit</strong>
                <br />
                <span className="text-muted">@khai.phv</span>
              </div>
            </div>
            <span class="fas fa-ellipsis-h"></span>
          </a>
        </div>
      </div>
    </div>

  );
}
export default SideBar;